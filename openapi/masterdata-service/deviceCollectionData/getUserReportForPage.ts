// 查询用户上报数据DTO
export interface I查询用户上报数据DTO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 搜索关键字
    searchKey: string;
}
// JSONResult«分页信息«设备数采人工上报数据详单分页信息返回VO»»
export interface IJSONResult分页信息设备数采人工上报数据详单分页信息返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«设备数采人工上报数据详单分页信息返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
