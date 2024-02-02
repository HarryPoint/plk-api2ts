// 物料主数据选择列表搜索VO
export interface I物料主数据选择列表搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 物料名称/编号
    nameOrCode: string;
    // 物料类型数组
    materialTypeList: string[];
}
// JSONResult«分页信息«物料主数据选择返回VO»»
export interface IJSONResult分页信息物料主数据选择返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«物料主数据选择返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
