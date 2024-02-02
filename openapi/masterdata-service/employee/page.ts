// 流程数据搜索VO_1
export interface I流程数据搜索VO_1 {
    // 全局搜索
    allSearch: string;
    // 当前页面
    pageNo: number;
    // 字段搜索
    dataSearchList: 流程数据明细搜索VO[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
    // 明细表表code，传值后，将会查询明细表数据
    tableColumnCode: string;
    // 当前的表单分组
    currentFormDataGrouping: 表单数据分组DTO;
    // 操作员工id
    opUserId: number;
    // 操作角色id集
    opRoleIds: number[];
    // 操作部门id
    opDeptId: number;
}
// JSONResult«分页信息«动态拓展数据VO«员工是否允许登录DTO»»»
export interface IJSONResult分页信息动态拓展数据VO员工是否允许登录DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«动态拓展数据VO«员工是否允许登录DTO»»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
