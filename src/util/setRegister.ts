export const setRegister = {
    required: () => {
        return {
            value: true,
            message: '文字が入力されていません',
        };
    },
    maxLength: (length: number) => {
        return {
            value: length,
            message: `${length}文字以内で入力してください`,
        };
    },
    minLength: (length: number) => {
        return {
            value: length,
            message: `${length}文字以上で入力してください`,
        };
    },
    pattern: (pattern: RegExp) => {
        return {
            value: pattern,
            message: '正しい形式で入力してください',
        };
    },
};
