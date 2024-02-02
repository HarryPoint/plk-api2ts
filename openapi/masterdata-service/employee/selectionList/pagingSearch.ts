// 用户主数据选择列表搜索VO
export interface I用户主数据选择列表搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 用户名称/编号
    nameOrCode: string;
    // 员工ID列表
    idList: number[];
}
// JSONResult«List«员工响应对象»»
export interface IJSONResultList员工响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 员工响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
