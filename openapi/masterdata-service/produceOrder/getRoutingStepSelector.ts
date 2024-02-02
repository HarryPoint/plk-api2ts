// JSONResult«List«生产工艺路径步骤工序响应 DTO»»
export interface IJSONResultList生产工艺路径步骤工序响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产工艺路径步骤工序响应 DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
