// 工艺路径信息查询对象
export interface I工艺路径信息查询对象 {
    // 物料id
    materialId: number;
    // 工艺路径名称
    routingName: string;
}
// JSONResult«List«工艺路径信息对象»»
export interface IJSONResultList工艺路径信息对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工艺路径信息对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
