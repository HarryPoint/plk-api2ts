import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17600/doc.html#/default/邮件任务/pageSearchUsingPOST
*/
export default function fetchMethod(options: { data: IPaging }, extraOptions?: any) {
    return http<IEmailTaskQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/message-notification-service/emailTask/pageSearch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 分页 */
export interface IPaging {
    /** 邮件名称-模糊查询 */
    emailName?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 收件人-模糊查询 */
    addressee?: string;
    /** 创建用户-精确匹配 */
    createUserId?: string;
    /** 邮件主题-模糊查询 */
    title?: string;
    /** 修改用户-精确匹配 */
    updateUserId?: string;
    /** 发送模式-精确匹配 */
    sendingMode?: EPaging_sendingMode;
    /** 创建时间-结束范围 */
    createTimeEnd?: number;
    /** 任务状态-精确匹配 */
    status?: EPaging_status;
    /** 修改时间-结束范围 */
    updateTimeEnd?: number;
    /** 创建时间-起始范围 */
    createTimeBegin?: number;
    /** 邮件任务ID列表 */
    emailTaskIdList?: string[];
    /** 修改时间-起始范围 */
    updateTimeBegin?: number;
    /** 附件查询请求 */
    attachmentConfigQueryRequest?: IEmailTaskAttachmentConfigQueryRequestDTO;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** EmailTaskAttachmentConfigQueryRequestDTO */
export interface IEmailTaskAttachmentConfigQueryRequestDTO {
    /** 应用ID列表-精确匹配 */
    refIdList?: string[];
}
/** JSONResult«分页信息«EmailTaskQueryResponseDTO»» */
export interface IEmailTaskQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationEmailTaskQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«EmailTaskQueryResponseDTO» */
export interface IThePagingInformationEmailTaskQueryResponseDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IEmailTaskQueryResponseDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationEmailTaskQueryResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationEmailTaskQueryResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** EmailTaskQueryResponseDTO */
export interface IEmailTaskQueryResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** undefined */
    id?: string;
    /** 邮件名称 */
    emailName?: string;
    /** 收件人 */
    addressee?: string;
    /** 邮件主题 */
    title?: string;
    /** 发送方式 */
    sendingMode?: EEmailTaskQueryResponseDTO_sendingMode;
    /** 任务状态 */
    status?: EEmailTaskQueryResponseDTO_status;
}

export enum EPaging_sendingMode {
    /** 单次 */
    SINGLE = "SINGLE",
    /** 多次 */
    MULTIPLE = "MULTIPLE"
}

export enum EPaging_status {
    /** 生效中 */
    IN_ACTIVE = "IN_ACTIVE",
    /** 已停用 */
    DEACTIVATED = "DEACTIVATED",
    /** 已完成 */
    COMPLETED = "COMPLETED"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePagingInformationEmailTaskQueryResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationEmailTaskQueryResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EEmailTaskQueryResponseDTO_sendingMode {
    /** 单次 */
    SINGLE = "SINGLE",
    /** 多次 */
    MULTIPLE = "MULTIPLE"
}

export enum EEmailTaskQueryResponseDTO_status {
    /** 生效中 */
    IN_ACTIVE = "IN_ACTIVE",
    /** 已停用 */
    DEACTIVATED = "DEACTIVATED",
    /** 已完成 */
    COMPLETED = "COMPLETED"
}
