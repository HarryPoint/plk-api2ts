// JSONResult«List«质量目标返回DTO»»
export interface IJSONResultList质量目标返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I质量目标返回DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量目标返回DTO
export interface I质量目标返回DTO {
    // 质量目标
    name: string;
    // 目标值类型
    targetType: string;
    // 定性目标值
    qualitativeTargetValue: string;
    // 定量目标值
    quantifyTargetValue: string;
    // q1实际值
    q1: string;
    // q2实际值
    q2: string;
    // q3实际值
    q3: string;
    // q4实际值
    q4: string;
}
