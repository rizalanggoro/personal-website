import { Info, Warning, CheckCircle, XCircle } from "@phosphor-icons/react";

type CalloutType = "info" | "warning" | "success" | "error";

interface CalloutProps {
  type?: CalloutType;
  children: React.ReactNode;
}

const calloutStyles: Record<CalloutType, { bg: string; border: string; icon: React.ReactNode }> = {
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: <Info size={20} weight="fill" className="text-blue-500" />,
  },
  warning: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: <Warning size={20} weight="fill" className="text-amber-500" />,
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: <CheckCircle size={20} weight="fill" className="text-green-500" />,
  },
  error: {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: <XCircle size={20} weight="fill" className="text-red-500" />,
  },
};

export function Callout({ type = "info", children }: CalloutProps) {
  const style = calloutStyles[type];

  return (
    <div className={`my-6 flex gap-3 rounded-lg border p-4 ${style.bg} ${style.border}`}>
      <div className="mt-0.5 flex-shrink-0">{style.icon}</div>
      <div className="text-sm text-zinc-700">{children}</div>
    </div>
  );
}
