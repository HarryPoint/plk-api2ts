// 工艺画布快照获取请求DTO_1
export interface I工艺画布快照获取请求DTO_1 {
    // 工艺id - 新增场景传值-1
    technologyId: number;
    // 快照保存json数据
    canvasSnapshot;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
