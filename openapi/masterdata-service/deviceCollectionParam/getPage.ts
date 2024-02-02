// 设备数据参数概览搜索VO
export interface I设备数据参数概览搜索VO {
    // 当前页面
    pageNo: number;
    // 设备参数编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 设备参数名称
    name: string;
    // 状态
    dataStatus: number;
}
// JSONResult«分页信息«设备数据参数概览返回VO»»
export interface IJSONResult分页信息设备数据参数概览返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«设备数据参数概览返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
