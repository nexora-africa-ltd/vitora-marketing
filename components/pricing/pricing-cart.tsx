'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

type BillingCycle = 'monthly' | 'annual';

type QuoteResponse = {
  currency: string;
  subtotal: string;
  discount_total: string;
  total: string;
  applied_bundle: { code: string; name: string } | null;
  effective_feature_set: string[];
  resolved_plan?:
    | 'BASIC'
    | 'PROFESSIONAL'
    | 'ENTERPRISE'
    | 'LIS_STANDALONE'
    | 'PHARMACY_STANDALONE'
    | 'IMAGING_STANDALONE'
    | 'DIAGNOSTIC_STANDALONE'
    | 'CUSTOM';
  line_items: Array<{ sku_code: string; name: string; total_price: string }>;
  quantity_charges: Array<{ type: string; total_price: string }>;
  usage_charges: Array<{ type: string; total_price: string }>;
};

const baseIncludedItems = [
  'Outpatient patient records and workflows',
  'Emergency / Casualty',
  'Billing and invoicing',
  'Pharmacy operations',
  'Inventory / Supply Chain',
  'Staff Scheduling',
  'SHA Claims Integration',
  'DHIS2/KHIS Reporting',
  'Offline Sync',
];

type PresetName = 'Clinic' | 'Hospital' | 'Enterprise';

const skuOptions: Array<{ code: string; label: string; group: string }> = [
  { code: 'mod_triage', label: 'Queue Management (Triage)', group: 'Clinical' },
  { code: 'mod_inpatient', label: 'Inpatient', group: 'Clinical' },
  { code: 'mod_laboratory', label: 'Laboratory', group: 'Clinical' },
  { code: 'mod_imaging', label: 'Imaging', group: 'Clinical' },
  { code: 'mod_theatre', label: 'Theatre', group: 'Clinical' },
  { code: 'mod_icu', label: 'ICU', group: 'Clinical' },
  { code: 'mod_maternity', label: 'Maternity', group: 'Clinical' },
  { code: 'mod_immunizations', label: 'Immunizations', group: 'Clinical' },
  { code: 'mod_allied_health', label: 'Allied Health', group: 'Clinical' },
  { code: 'mod_quality', label: 'Quality Improvement', group: 'Clinical' },
  { code: 'mod_surveillance', label: 'Disease Surveillance', group: 'Public Health' },
  { code: 'mod_moh_reporting', label: 'MOH Reporting', group: 'Public Health' },
  { code: 'plat_ai_assistant', label: 'AI Assistant', group: 'Platform' },
  { code: 'plat_api_access', label: 'API Access', group: 'Platform' },
  { code: 'plat_custom_reports', label: 'Custom Reports', group: 'Platform' },
  { code: 'plat_sms_notifications', label: 'SMS/WhatsApp', group: 'Platform' },
  { code: 'plat_analytics', label: 'Analytics & BI', group: 'Platform' },
  { code: 'std_lis', label: 'Standalone LIS', group: 'Standalone' },
  { code: 'std_pharmacy', label: 'Standalone Pharmacy', group: 'Standalone' },
  { code: 'std_imaging', label: 'Standalone Imaging', group: 'Standalone' },
  { code: 'mod_dialysis', label: 'Dialysis', group: 'Advanced' },
  { code: 'mod_mortuary', label: 'Mortuary', group: 'Advanced' },
  { code: 'mod_blood_bank', label: 'Blood Bank', group: 'Advanced' },
  { code: 'mod_private_insurance', label: 'Private Insurance', group: 'Advanced' },
];

const presets: Record<PresetName, { selected: string[]; facilities: number; users: number }> = {
  Clinic: {
    selected: [],
    facilities: 1,
    users: 10,
  },
  Hospital: {
    selected: [
      'mod_inpatient',
      'mod_laboratory',
      'mod_imaging',
      'mod_theatre',
      'mod_icu',
      'mod_maternity',
      'plat_ai_assistant',
      'plat_analytics',
      'plat_api_access',
      'plat_custom_reports',
      'plat_sms_notifications',
    ],
    facilities: 1,
    users: 50,
  },
  Enterprise: {
    selected: [
      'mod_inpatient',
      'mod_laboratory',
      'mod_imaging',
      'mod_theatre',
      'mod_icu',
      'mod_maternity',
      'mod_surveillance',
      'mod_quality',
      'mod_moh_reporting',
      'mod_dialysis',
      'mod_mortuary',
      'mod_blood_bank',
      'mod_private_insurance',
      'plat_ai_assistant',
      'plat_api_access',
      'plat_custom_reports',
      'plat_sms_notifications',
      'plat_analytics',
    ],
    facilities: 5,
    users: 150,
  },
};

function money(value: string, currency = 'KES') {
  const amount = Number(value || 0);
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

function resolveCta(plan?: QuoteResponse['resolved_plan']) {
  if (plan === 'BASIC') {
    return { label: 'Apply for Pilot', href: '/contact?type=pilot' };
  }
  if (
    plan === 'LIS_STANDALONE' ||
    plan === 'PHARMACY_STANDALONE' ||
    plan === 'IMAGING_STANDALONE' ||
    plan === 'DIAGNOSTIC_STANDALONE'
  ) {
    return { label: 'Request Standalone Demo', href: '/demo' };
  }
  if (plan === 'PROFESSIONAL') {
    return { label: 'Book a Demo', href: '/demo' };
  }
  if (plan === 'ENTERPRISE') {
    return { label: 'Contact Sales', href: '/contact?type=enterprise' };
  }
  return { label: 'Talk to Sales', href: '/contact?type=custom' };
}

function resolvedPlanLabel(plan?: QuoteResponse['resolved_plan']) {
  const labels: Partial<Record<NonNullable<QuoteResponse['resolved_plan']>, string>> = {
    BASIC: 'Clinic',
    PROFESSIONAL: 'Hospital',
    ENTERPRISE: 'Enterprise',
    LIS_STANDALONE: 'Standalone Laboratory',
    PHARMACY_STANDALONE: 'Standalone Pharmacy',
    IMAGING_STANDALONE: 'Standalone Imaging',
    DIAGNOSTIC_STANDALONE: 'Standalone Diagnostic Centre',
    CUSTOM: 'Custom',
  };
  return plan ? labels[plan] ?? plan : 'Custom';
}

export function PricingCart() {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [selected, setSelected] = useState<string[]>(presets.Clinic.selected);
  const [facilities, setFacilities] = useState(1);
  const [users, setUsers] = useState(10);
  const [aiTokens, setAiTokens] = useState(0);
  const [smsMessages, setSmsMessages] = useState(0);
  const [apiCalls, setApiCalls] = useState(0);
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittingCta, setSubmittingCta] = useState(false);

  const grouped = useMemo(() => {
    return skuOptions.reduce<Record<string, typeof skuOptions>>((acc, item) => {
      if (!acc[item.group]) acc[item.group] = [];
      acc[item.group].push(item);
      return acc;
    }, {});
  }, []);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/api/pricing/quote/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            billing_cycle: billingCycle,
            base_sku: 'base_platform',
            selected_skus: selected,
            quantities: { facilities, users },
            usage_estimate: {
              ai_tokens: aiTokens,
              sms_messages: smsMessages,
              api_calls: apiCalls,
            },
          }),
        });

        const data = await res.json();
        if (!res.ok) {
          setQuote(null);
          setError(data?.detail || 'Could not generate quote.');
        } else {
          setQuote(data);
        }
      } catch {
        setQuote(null);
        setError('Pricing service is unavailable right now.');
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [billingCycle, selected, facilities, users, aiTokens, smsMessages, apiCalls]);

  function applyPreset(name: PresetName) {
    const preset = presets[name];
    setSelected(preset.selected);
    setFacilities(preset.facilities);
    setUsers(preset.users);
  }

  function toggleSku(code: string) {
    setSelected((prev) => (prev.includes(code) ? prev.filter((s) => s !== code) : [...prev, code]));
  }

  async function handleCtaClick() {
    const cta = resolveCta(quote?.resolved_plan);
    if (!quote) {
      router.push(cta.href);
      return;
    }

    setSubmittingCta(true);
    try {
      const res = await fetch('/api/pricing/quotes/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'marketing_pricing_cart',
          billing_cycle: billingCycle,
          base_sku: 'base_platform',
          selected_skus: selected,
          quantities: { facilities, users },
          usage_estimate: {
            ai_tokens: aiTokens,
            sms_messages: smsMessages,
            api_calls: apiCalls,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data?.quote_id) {
        router.push(cta.href);
        return;
      }

      const sep = cta.href.includes('?') ? '&' : '?';
      router.push(`${cta.href}${sep}quote_id=${encodeURIComponent(data.quote_id)}`);
    } catch {
      router.push(cta.href);
    } finally {
      setSubmittingCta(false);
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-brand-burgundy dark:text-white sm:text-4xl">
              Build Your Plan
            </h2>
            <p className="mt-3 text-muted-foreground">
              Pick modules like a cart and get a live estimate instantly.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Base platform already includes the full Clinic package; add-ons below expand to Hospital and Enterprise.
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-2 justify-center">
            {(['Clinic', 'Hospital', 'Enterprise'] as PresetName[]).map((name) => (
              <button
                key={name}
                type="button"
                onClick={() => applyPreset(name)}
                className="rounded-lg border border-brand-teal px-4 py-2 text-sm font-medium text-brand-teal hover:bg-brand-teal/10"
              >
                {name} preset
              </button>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Billing</span>
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`rounded-md px-3 py-1.5 text-sm ${
                    billingCycle === 'monthly'
                      ? 'bg-brand-burgundy text-white'
                      : 'border border-border text-muted-foreground'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`rounded-md px-3 py-1.5 text-sm ${
                    billingCycle === 'annual'
                      ? 'bg-brand-burgundy text-white'
                      : 'border border-border text-muted-foreground'
                  }`}
                >
                  Annual
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1">
                  <span className="text-sm text-muted-foreground">Facilities</span>
                  <input
                    type="number"
                    min={1}
                    value={facilities}
                    onChange={(e) => setFacilities(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </label>
                <label className="space-y-1">
                  <span className="text-sm text-muted-foreground">Users</span>
                  <input
                    type="number"
                    min={1}
                    value={users}
                    onChange={(e) => setUsers(Math.max(1, Number(e.target.value) || 1))}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <label className="space-y-1">
                  <span className="text-sm text-muted-foreground">AI tokens/mo</span>
                  <input
                    type="number"
                    min={0}
                    value={aiTokens}
                    onChange={(e) => setAiTokens(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </label>
                <label className="space-y-1">
                  <span className="text-sm text-muted-foreground">SMS msgs/mo</span>
                  <input
                    type="number"
                    min={0}
                    value={smsMessages}
                    onChange={(e) => setSmsMessages(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </label>
                <label className="space-y-1">
                  <span className="text-sm text-muted-foreground">API calls/mo</span>
                  <input
                    type="number"
                    min={0}
                    value={apiCalls}
                    onChange={(e) => setApiCalls(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  />
                </label>
              </div>

              <div className="space-y-4">
                {Object.entries(grouped).map(([group, items]) => (
                  <div key={group}>
                    <h3 className="mb-2 text-sm font-semibold text-brand-burgundy dark:text-white">{group}</h3>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {items.map((item) => (
                        <label key={item.code} className="flex items-center gap-2 text-sm">
                          <input
                            type="checkbox"
                            checked={selected.includes(item.code)}
                            onChange={() => toggleSku(item.code)}
                            className="h-4 w-4"
                          />
                          {item.label}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="text-xl font-bold text-brand-burgundy dark:text-white">Live Estimate</h3>
              {loading && <p className="mt-3 text-sm text-muted-foreground">Calculating quote...</p>}
              {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

              {!loading && quote && (
                <div className="mt-4 space-y-4">
                  <div className="space-y-2 text-sm">
                    {quote.line_items.map((line) => (
                      <div key={line.sku_code} className="flex items-center justify-between">
                        <span>{line.name}</span>
                        <span>{money(line.total_price, quote.currency)}</span>
                      </div>
                    ))}
                    {quote.quantity_charges.map((line, idx) => (
                      <div key={`${line.type}-${idx}`} className="flex items-center justify-between text-muted-foreground">
                        <span>{line.type.replaceAll('_', ' ')}</span>
                        <span>{money(line.total_price, quote.currency)}</span>
                      </div>
                    ))}
                    {quote.usage_charges.map((line, idx) => (
                      <div key={`${line.type}-${idx}`} className="flex items-center justify-between text-muted-foreground">
                        <span>{line.type.replaceAll('_', ' ')}</span>
                        <span>{money(line.total_price, quote.currency)}</span>
                      </div>
                    ))}

                    <div className="pt-2">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Included In Base Package
                      </p>
                      {baseIncludedItems.map((label) => (
                        <div key={label} className="flex items-center justify-between text-muted-foreground">
                          <span>{label}</span>
                          <span className="rounded-full bg-brand-teal/10 px-2 py-0.5 text-[11px] font-medium text-brand-teal">
                            Included
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-3 text-sm space-y-1">
                    <div className="flex items-center justify-between">
                      <span>Subtotal</span>
                      <span>{money(quote.subtotal, quote.currency)}</span>
                    </div>
                    <div className="flex items-center justify-between text-green-700">
                      <span>Discount</span>
                      <span>-{money(quote.discount_total, quote.currency)}</span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-base">
                      <span>Total*</span>
                      <span>{money(quote.total, quote.currency)}</span>
                    </div>
                    <p className="pt-1 text-xs text-muted-foreground">*Prices shown are exclusive of VAT.</p>
                  </div>

                  {quote.applied_bundle && (
                    <div className="rounded-md bg-green-50 dark:bg-green-950/40 px-3 py-2 text-sm text-green-800 dark:text-green-300">
                      Bundle applied: {quote.applied_bundle.name}
                    </div>
                  )}

                  {quote.resolved_plan && (
                    <div className="rounded-md bg-brand-teal/10 px-3 py-2 text-sm text-brand-teal">
                      Suggested plan: {resolvedPlanLabel(quote.resolved_plan)}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={handleCtaClick}
                    disabled={submittingCta}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-brand-burgundy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-burgundy-800 disabled:opacity-60"
                  >
                    {submittingCta ? 'Preparing quote...' : resolveCta(quote.resolved_plan).label}
                  </button>

                  <div>
                    <p className="text-sm font-medium mb-2">Features included</p>
                    <div className="flex flex-wrap gap-2">
                      {quote.effective_feature_set.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-brand-teal/10 px-2.5 py-1 text-xs text-brand-teal"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
