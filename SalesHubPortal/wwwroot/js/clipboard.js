window.clipboardHelper = {
    async checkReadPermission() {
        try {
            const result = await navigator.permissions.query({ name: "clipboard-read" });
            return result.state;
        } catch (err) {
            console.error(err);
            return "unsupported";
        }
    },

    async readText() {
        try {
            return await navigator.clipboard.readText();
        } catch (err) {
            console.error(err);
            return null;
        }
    }
};
