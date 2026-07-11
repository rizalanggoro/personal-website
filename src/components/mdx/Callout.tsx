import { Info, Warning, CheckCircle, XCircle } from "@phosphor-icons/react";

type CalloutType = "info" | "warning" | "success" | "error";

interface CalloutProps {
  type?: CalloutType;
  children: React.ReactNode;
}

const calloutConfig: Record<
  CalloutType,
  { border: string; bg: string; icon: React.ReactNode; label: string }
> = {
  info: {
    border: "border-blue-200 dark:border-blue-800",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    icon: <Info size={20} weight="fill" className="text-blue-600 dark:text-blue-400" />,
    label: "Info",
  },
  warning: {
    border: "border-amber-200 dark:border-amber-800",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    icon: <Warning size={20} weight="fill" className="text-amber-600 dark:text-amber-400" />,
    label: "Warning",
  },
  success: {
    border: "border-green-200 dark:border-green-800",
    bg: "bg-green-50 dark:bg-green-950/40",
    icon: (
      <CheckCircle size={20} weight="fill" className="text-green-600 dark:text-green-400" />
    ),
    label: "Success",
  },
  error: {
    border: "border-red-200 dark:border-red-800",
    bg: "bg-red-50 dark:bg-red-950/40",
    icon: <XCircle size={20} weight="fill" className="text-red-600 dark:text-red-400" />,
    label: "Error",
  },
};

export function Callout({ type = "info", children }: CalloutProps) {
  const config = calloutConfig[type];

  return (
    <div
      className={`my-6 rounded-lg border-l-4 px-5 py-4 ${config.bg} ${config.border}`}
    >
      <div className="mb-2 flex items-center gap-2">
        {config.icon}
        <span className="text-xs font-semibold uppercase tracking-wider">
          {config.label}
        </span>
      </div>
      <div className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </div>
  );
}
