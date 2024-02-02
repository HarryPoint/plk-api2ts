// 工序操作人员id搜索VO
export interface I工序操作人员id搜索VO {
    // 当前页面
    pageNo: number;
    // 工序id
    processId: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 员工类型
    userType: string;
}
// JSONResult«List«long»»
export interface IJSONResultListlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
