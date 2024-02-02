// JSONResult«List«质量绩效评价表返回DTO»»_1
export interface IJSONResultList质量绩效评价表返回DTO_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I质量绩效评价表返回DTO_1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量绩效评价表返回DTO_1
export interface I质量绩效评价表返回DTO_1 {
    // 总扣分
    totalDeductPoints: number;
    // 供应商名称
    supplierName: string;
}
