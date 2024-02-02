// JSONResult«List«质量绩效评价表返回DTO»»
export interface IJSONResultList质量绩效评价表返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I质量绩效评价表返回DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量绩效评价表返回DTO
export interface I质量绩效评价表返回DTO {
    // 得分
    score: number;
    // 部门
    departmentName: string;
}
