// 保存导入文件
export interface ISaveImportFile {
    // 模板ID
    templateId: number;
    // 文件Key
    fileKey: string;
    // 文件名称
    fileName: string;
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
