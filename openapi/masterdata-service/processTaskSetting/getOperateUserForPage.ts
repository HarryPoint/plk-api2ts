// 工序操作人员搜索VO
export interface I工序操作人员搜索VO {
    // 当前页面
    pageNo: number;
    // 工序id
    processId: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 员工类型
    userType: string;
    // 员工id集合
    userIds: number[];
    // 部门id集合
    departmentIds: number[];
    // 班组id集合
    classGroupIds: number[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«工序操作人员VO»»
export interface IJSONResult分页信息工序操作人员VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息工序操作人员VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«工序操作人员VO»
export interface I分页信息工序操作人员VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I工序操作人员VO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 工序操作人员VO
export interface I工序操作人员VO {
    // 员工id
    userId: number;
    // 员工编号
    userCode: string;
    // 员工名称
    userName: string;
    // 部门id
    departmentId: number;
    // 部门编号
    departmentCode: string;
    // 部门名称
    departmentName: string;
    // 班组id
    classGroupId: number;
    // 班组名称
    classGroupName: string;
    // 班组编号
    classGroupCode: string;
}
