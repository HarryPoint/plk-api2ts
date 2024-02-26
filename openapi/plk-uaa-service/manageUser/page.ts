import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/运营账号相关/pageUsingPOST_4
*/
export default function fetchMethod(options: { data: IAccountInquiry }, extraOptions?: any) {
    return http<IJSONResultPageInformationOperationUserInformationResponse>(
        {
            url: "/plk-uaa-service/manageUser/page",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 账号查询 */
export interface IAccountInquiry {
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
    /** 员工姓名 */
    employeeName?: string;
    /** 角色id集 */
    roleIds?: number[];
    /** 手机号码 */
    telephone?: string;
    /** 状态集 */
    statusList?: ('WAIT_ACTIVATE' | 'ACTIVATED' | 'DISABLED')[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«运营用户信息响应»» */
export interface IJSONResultPageInformationOperationUserInformationResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationOperationUserInformationResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«运营用户信息响应» */
export interface IPageInformationOperationUserInformationResponse {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IOperationUserInformationResponse[];
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
/** 运营用户信息响应 */
export interface IOperationUserInformationResponse {
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
    /** 邮件 */
    email?: string;
    /** 运营员工信息 */
    manageEmployee?: IOperationalEmployeeInformationResponse;
    /** 运营角色信息 */
    manageRoleList?: IOperationalRoleResponse[];
    /** 过期时间 */
    expireTime?: string;
    /** 最后登录时间 */
    lastLoginTime?: string;
    /** 状态 */
    status?: ('WAIT_ACTIVATE' | 'ACTIVATED' | 'DISABLED');
}
/** 运营员工信息响应 */
export interface IOperationalEmployeeInformationResponse {
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
    isManage?: ('Y' | 'N');
    /** 是否是管理员 */
    isAdmin?: ('Y' | 'N');
    /** 描述 */
    description?: string;
    /** 关联的账号数 */
    relationUserCount?: number;
}
