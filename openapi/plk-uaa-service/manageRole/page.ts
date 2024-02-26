import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/运营角色相关/pageUsingPOST_3
*/
export default function fetchMethod(options: { data: IOperationRoleQuery }, extraOptions?: any) {
    return http<IJSONResultPagingInformationOperationRoleResponse>(
        {
            url: "/plk-uaa-service/manageRole/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 运营角色查询 */
export interface IOperationRoleQuery {
    /** 创建人 */
    createUserIds?: number[];
    /** 当前页面 */
    pageNo?: number;
    /** 创建时间开始 */
    createBeginTime?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 角色编码 */
    code?: string;
    /** 角色名称 */
    name?: string;
    /** 创建时间结束 */
    createEndTime?: string;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: string;
}
/** JSONResult«分页信息«运营角色响应»» */
export interface IJSONResultPagingInformationOperationRoleResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationOperationRoleResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«运营角色响应» */
export interface IPageInformationOperationRoleResponse {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IOperationalRoleResponse[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 运营角色响应 */
export interface IOperationalRoleResponse {
    /** 数据状态 */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人名称 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新人id */
    updateUserId?: number;
    /** 更新人名称 */
    updateUsername?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 是否是超级管理员 */
    isManage?: string;
    /** 是否是管理员 */
    isAdmin?: string;
    /** 描述 */
    description?: string;
    /** 关联的账号数 */
    relationUserCount?: number;
}
