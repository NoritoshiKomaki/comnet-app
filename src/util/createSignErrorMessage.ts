import { ApiError } from '@supabase/supabase-js';

export const createSignErrorMessage = (error: ApiError | null): string => {
    if (error === null) {
        return '';
    }
    if (error.message === 'Invalid login credentials') {
        return 'メールアドレスまたはパスワードが違います';
    }
    if (error.message === 'User already registered') {
        return '既に登録されたアカウントです';
    }
    return '通信環境を確認してください';
};
