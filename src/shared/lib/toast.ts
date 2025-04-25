import { toast } from 'sonner';

export { Toaster } from 'sonner';

export const notifySuccess = (msg: string) => {
  toast.success(msg);
};

export const notifyError = (msg: string) => {
  toast.error(msg);
};

export const notify = (msg: string) => {
  toast.message(msg);
};
