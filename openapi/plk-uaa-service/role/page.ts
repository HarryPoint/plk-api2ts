import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/角色相关/pageUsingPOST_7
*/
export default function fetchMethod(options: { data: IRoleQuery }, extraOptions?: any) {
    return http<IJSONResultPagingInformationEnterpriseRoleResponse>(
        {
            url: "/plk-uaa-service/role/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 角色查询 */
export interface IRoleQuery {
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
    /** 服务对象ID */
    serviceObjectId?: number;
    /** 导出字段集 */
    exportFields?: string[];
    /** 角色编码 */
    code?: string;
    /** 角色名称 */
    name?: string;
    /** 应用级别 */
    applicationLevel?: ('PROJECT_MANAGER' | 'ENTERPRISE');
    /** 创建时间结束 */
    createEndTime?: string;
    /** 服务业务ID */
    serviceBusinessId?: number;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«企业角色响应»» */
export interface IJSONResultPagingInformationEnterpriseRoleResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationEnterpriseRoleResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«企业角色响应» */
export interface IPagingInformationEnterpriseRoleResponse {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IEnterpriseRoleResponse[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 企业角色响应 */
export interface IEnterpriseRoleResponse {
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
    /** 角色包含用户数 */
    userCount?: number;
    /** 是否是超级管理员 */
    isManage?: ('Y' | 'N');
    /** 是否是管理员 */
    isAdmin?: ('Y' | 'N');
    /** 描述 */
    description?: string;
    /** 应用级别 */
    applicationLevel?: ('PROJECT_MANAGER' | 'ENTERPRISE');
    /** 服务对象ID */
    serviceObjectId?: number;
    /** 服务业务ID */
    serviceBusinessId?: number;
}
