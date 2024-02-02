// JSONResult«文件对象明细响应DTO»
export interface IJSONResult文件对象明细响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I文件对象明细响应DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 文件对象明细响应DTO
export interface I文件对象明细响应DTO {
    // ID
    id: number;
    // 文件名
    name: string;
    // 文件分类ID
    fileCategoryId: number;
    // 文件大小
    fileSize: number;
    // 文件来源
    fileForm: string;
    // 文件Key
    fileKeys: undefined[];
}
