// 仓位系统应用库存批次号查询对象
export interface I仓位系统应用库存批次号查询对象 {
    // 批次号
    lotNo: string[];
}
// JSONResult«List«仓位系统应用库存批次号分页返回对象»»
export interface IJSONResultList仓位系统应用库存批次号分页返回对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 仓位系统应用库存批次号分页返回对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
