"use client";

import { Turnstile as TurnstilePrimitive, type TurnstileInstance } from "@marsidev/react-turnstile";
import { useImperativeHandle, useRef } from "react";

export type TurnstileRef = TurnstileInstance | undefined;

type TurnstileProps = {
  onSuccess?: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
};

export function Turnstile({
  onSuccess,
  onError,
  onExpire,
  className,
  ref,
}: TurnstileProps & { ref?: React.Ref<TurnstileRef> }) {
  const turnstileRef = useRef<TurnstileRef>(undefined);

  useImperativeHandle(ref, () => turnstileRef.current);

  return (
    <TurnstilePrimitive
      ref={turnstileRef}
      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ""}
      onSuccess={onSuccess}
      onError={onError}
      onExpire={onExpire}
      className={className}
      options={{
        theme: "light",
        size: "normal",
      }}
    />
  );
}
