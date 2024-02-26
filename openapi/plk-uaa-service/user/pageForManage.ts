import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/用户账号相关/pageForManageUsingPOST
*/
export default function fetchMethod(options: { data: IUserManagementQuery }, extraOptions?: any) {
    return http<IJSONResultPagingInformationUserManagementResponse>(
        {
            url: "/plk-uaa-service/user/pageForManage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 用户管理查询 */
export interface IUserManagementQuery {
    /** 创建人 */
    createUserIds?: number[];
    /** 当前页面 */
    pageNo?: number;
    /** 创建时间开始 */
    createBeginTime?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 创建时间结束 */
    createEndTime?: string;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
    /** 可访问企业id集 */
    enterpriseIdList?: number[];
    /** 手机号 */
    telephone?: string;
    /** 状态 */
    statusList?: EUserManagementQuery_statusList_items[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«用户管理响应»» */
export interface IJSONResultPagingInformationUserManagementResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationTheUserManagesTheResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«用户管理响应» */
export interface IPageInformationTheUserManagesTheResponse {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IUserManagementResponse[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationTheUserManagesTheResponse_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationTheUserManagesTheResponse_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 用户管理响应 */
export interface IUserManagementResponse {
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
    /** 手机号 */
    telephone?: string;
    /** 可访问企业集 */
    enterpriseList?: IIdCodeNameGenericTransportObject[];
    /** 状态 */
    status?: EUserManagementResponse_status;
    /** 创建方式 */
    createType?: EUserManagementResponse_createType;
    /** 最后登录时间 */
    lastLoginTime?: string;
    /** 最后修改时间 */
    lastUpdateTime?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: number;
    /** code */
    code?: string;
    /** name */
    name?: string;
}

export enum EUserManagementQuery_statusList_items {
    WAIT_ACTIVATE = "WAIT_ACTIVATE",
    ACTIVATED = "ACTIVATED",
    DISABLED = "DISABLED"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationTheUserManagesTheResponse_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationTheUserManagesTheResponse_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EUserManagementResponse_status {
    /** 待激活 */
    WAIT_ACTIVATE = "WAIT_ACTIVATE",
    /** 已激活 */
    ACTIVATED = "ACTIVATED",
    /** 已禁用 */
    DISABLED = "DISABLED"
}

export enum EUserManagementResponse_createType {
    /** 后台创建 */
    MANAGE = "MANAGE",
    /** 企业创建 */
    ENTERPRISE = "ENTERPRISE",
    /** 本人创建 */
    SELF = "SELF"
}
