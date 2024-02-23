import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/报表模板/pagingSearchUsingPOST
export default function fetchMethod(data: IPaging13) {
    return http<IReportTemplateQueryResponseDTOJSONResultPagingInformation>({
        url: "/app-enterprise-web/api/app/enterprise/reportTemplate/pagingSearch",
        method: "post",
        data,
    });
}
// 分页_13
export interface IPaging13 {
    // 模板名称 - 模糊查询
    templateName: string;
    // 当前页面
    pageNo: number;
    // 报表名称 - 模糊查询
    reportName: string;
    // 分页大小
    pageSize: number;
    // 创建用户ID
    createUserId: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 模板状态 - 精确匹配, -1 删除， 1 有效， 2.暂存，0 停用
    status: number;
    // 更新用户ID
    updateUserId: number;
    // 创建时间-范围开始时间
    createTimeBegin: string;
    // 更新时间 - 范围结束时间
    updateTimeEnd: string;
    // 创建时间-范围结束时间
    createTimeEnd: string;
    // 更新时间 - 范围开始时间
    updateTimeBegin: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«ReportTemplateQueryResponseDTO»»
export interface IReportTemplateQueryResponseDTOJSONResultPagingInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePagingInformationReportTemplateQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«ReportTemplateQueryResponseDTO»
export interface IThePagingInformationReportTemplateQueryResponseDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IReportTemplateQueryResponseDTO[];
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
// ReportTemplateQueryResponseDTO
export interface IReportTemplateQueryResponseDTO {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 创建部门ID
    createDeptId: number;
    // 创建部门名称
    createDeptName: string;
    // 更新部门ID
    updateDeptId: number;
    // 更新部门名称
    updateDeptName: string;
    // 创建时间
    createTime: string;
    // 更新用户ID
    updateUserId: number;
    // 更新用户名称
    updateUserName: string;
    // 更新时间
    updateTime: string;
    // ID
    id: number;
    // 模板名称 - 模糊查询
    templateName: string;
    // 报表类型 - 报表
    report: string;
    // 报表名称 - 模糊查询
    reportName: string;
    // 模板状态 - 精确匹配
    dataStatus: number;
    // 报表统计时间区间描述
    reportStatisticsTimeRangeDesc: string;
}
