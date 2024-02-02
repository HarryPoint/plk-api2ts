// JSONResult«List«生产工艺路径步骤工序响应 DTO»»
export interface IJSONResultList生产工艺路径步骤工序响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产工艺路径步骤工序响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产工艺路径步骤工序响应 DTO
export interface I生产工艺路径步骤工序响应DTO {
    // 工艺路径步骤id
    id: number;
    // 对应步骤
    routingStep: number;
    // 工序
    process: I工序响应DTO;
}
// 工序响应 DTO
export interface I工序响应DTO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
