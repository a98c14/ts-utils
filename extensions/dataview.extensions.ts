export {};
DataView.prototype.getString = function (this: DataView, byteOffset: number) {
    const decoder = new TextDecoder();
    const strLength = this.getInt32(byteOffset, true);
    const strView = new Uint8Array(this.buffer, byteOffset + 4, strLength); // +4 for skipping string length
    return decoder.decode(strView);
};

DataView.prototype.setString = function (this: DataView, byteOffset: number, value: string) {
    const encoder = new TextEncoder();
    this.setInt32(byteOffset, value.length, true);
    const strView = new Uint8Array(this.buffer, byteOffset + 4, value.length); // +4 for skipping string length
    encoder.encodeInto(value, strView);
};
