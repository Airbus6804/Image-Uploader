export class ImageUploader {
    url: string;
    port: number;

    constructor(url: string, port: number) {
        this.url = url;
        this.port = port;
    }

    async uploadImages(body: string): Promise<false | string[]> {
        try {
            const stream = await fetch(`${this.url}:${this.port}/`, {
                method: "POST",
                body,
            });

            const data = await stream.json();

            return data;
        } catch {
            return false;
        }
    }
}
