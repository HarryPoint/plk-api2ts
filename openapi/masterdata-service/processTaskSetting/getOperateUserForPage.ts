// 工序操作人员搜索VO
export interface I工序操作人员搜索VO {
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
    // 员工id集合
    userIds: number[];
    // 部门id集合
    departmentIds: number[];
    // 班组id集合
    classGroupIds: number[];
}
// JSONResult«分页信息«工序操作人员VO»»
export interface IJSONResult分页信息工序操作人员VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«工序操作人员VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
