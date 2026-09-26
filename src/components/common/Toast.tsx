import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

export const Toast: React.FC = () => {
  const { toast } = useShop();

  if (!toast) return null;

  const iconMap = {
    success: <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-[#FF4B55] shrink-0" />,
    info: <Info className="w-4 h-4 text-[#00CFFF] shrink-0" />
  };

  return (
    <div className="fixed bottom-20 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-50 animate-bounce-short">
      <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#0f121d] border border-[#23293e] text-white shadow-2xl text-xs font-medium">
        {iconMap[toast.type]}
        <span>{toast.message}</span>
      </div>
    </div>
  );
};
