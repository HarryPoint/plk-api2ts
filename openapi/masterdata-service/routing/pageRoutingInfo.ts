// 工艺路径信息分页查询DTO
export interface I工艺路径信息分页查询DTO {
    // 当前页面
    pageNo: number;
    // 工艺路径名称
    routingName: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 物料id
    materialId: number;
}
// JSONResult«分页信息«工艺路径信息对象»»
export interface IJSONResult分页信息工艺路径信息对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«工艺路径信息对象»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
