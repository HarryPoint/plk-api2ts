// JSONResult«List«生产任务BOM物料信息VO»»
export interface IJSONResultList生产任务BOM物料信息VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产任务BOM物料信息VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
