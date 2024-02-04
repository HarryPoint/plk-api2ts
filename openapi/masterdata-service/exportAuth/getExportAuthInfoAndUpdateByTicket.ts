// JSONResult«导出ticket信息»_1
export interface IJSONResult导出ticket信息_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出ticket信息_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出ticket信息_1
export interface I导出ticket信息_1 {
    // 所属企业id
    enterpriseId: number;
    // 所属企业编码
    enterpriseCode: string;
    // 所属企业编码
    searchInfo: string;
}