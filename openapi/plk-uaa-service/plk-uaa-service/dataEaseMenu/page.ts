// DataEase菜单分页查询对象
export interface IDataEaseMenuPagesQueryObjects {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 企业ids
    enterpriseIds: number[];
    // 排序字段集
    orders: IPagingSort[];
    // 创建人ids
    createUserIds: number[];
    // 汇总聚合维度字段集
    groupBys: string[];
    // 导出字段集
    exportFields: string[];
    // 菜单名称
    name: string;
    // 电脑端 -- 传Y
    isPcTerminal: string;
    // 移动端 -- 传Y
    isMobileTerminal: string;
    // 创建时间 -- 开始
    beginCreateTime: string;
    // 创建时间 -- 结束
    endCreateTime: string;
}
// 分页排序
export interface IPagingSort {
    // 需要进行排序的字段
    column: string;
    // 是否正序排列，默认Y
    isAsc: string;
}
// JSONResult«分页信息«DataEase菜单分页响应对象»»
export interface IJSONResultPagingInformationDataEaseMenuPagingResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationDataEaseMenuPagingResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«DataEase菜单分页响应对象»
export interface IPagingInformationDataEaseMenuPagingResponseObject {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IDataEaseMenuPagingResponseObject[];
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
// DataEase菜单分页响应对象
export interface IDataEaseMenuPagingResponseObject {
    // 创建人id
    createUserId: number;
    // 创建人名称
    createUsername: string;
    // 创建时间
    createTime: string;
    // 更新人id
    updateUserId: number;
    // 更新人名称
    updateUsername: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 企业id
    enterpriseId: number;
    // 企业名称
    enterpriseName: string;
    // 菜单名称
    name: string;
    // 链接地址
    originalLinkUrl: string;
    // 是否在PC端发布
    isPcTerminal: string;
    // 是否在移动端发布
    isMobileTerminal: string;
    // 状态
    dataStatus: number;
}
