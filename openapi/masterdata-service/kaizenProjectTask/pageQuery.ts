import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/kaizen项目任务相关/pageQueryUsingPOST_1
*/
export default function fetchMethod(options: { data: IPagingInformation }, extraOptions?: any) {
    return http<IKaizenProjectTaskResponseDTOJSONResultPagingInformation>(
        {
            url: "/masterdata-service/kaizenProjectTask/pageQuery",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页信息 */
export interface IPagingInformation {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 任务名称 - 关键字查询 */
    name?: string;
    /** 开始时间 - 开始范围 */
    beginTimeBegin?: number;
    /** 关联项目 - 下拉多选 */
    projectIdList?: string[];
    /** 开始时间 - 结束范围 */
    beginTimeEnd?: number;
    /** 任务状态 - 下拉多选 */
    projectTaskStatusList?: EPagingInformation_projectTaskStatusList_items[];
    /** 执行人 - 下拉多选 */
    leaderUserIdList?: string[];
    /** 优先级 - 下拉多选查询 */
    priorityList?: EPagingInformation_priorityList_items[];
    /** 创建时间 - 结束范围 */
    createTimeEnd?: number;
    /** 备注 - 关键字查询 */
    remark?: string;
    /** 创建员工 - 下拉多选查询 */
    createUserIdList?: string[];
    /** 创建时间 - 开始范围 */
    createTimeBegin?: number;
    /** 创建时间 - Y - 正序， N - 倒序 */
    createTimeAsc?: EPagingInformation_createTimeAsc;
}
/** JSONResult«分页信息«KaizenProjectTaskResponseDTO»» */
export interface IKaizenProjectTaskResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePagingInformationKaizenProjectTaskResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«KaizenProjectTaskResponseDTO» */
export interface IThePagingInformationKaizenProjectTaskResponseDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IKaizenProjectTaskResponseDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePagingInformationKaizenProjectTaskResponseDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePagingInformationKaizenProjectTaskResponseDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** KaizenProjectTaskResponseDTO */
export interface IKaizenProjectTaskResponseDTO {
    /** ID */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 项目任务状态 */
    projectTaskStatus?: EKaizenProjectTaskResponseDTO_projectTaskStatus;
    /** 关联项目 */
    projectId?: IAssociateFormDataVO;
    /** 执行人 */
    leaderUserId?: IAssociateFormDataVO;
    /** 上级ID */
    parentId?: string;
    /** 开始时间 */
    beginTime?: number;
    /** 结束时间 */
    endTime?: number;
    /** 优先级 */
    priority?: EKaizenProjectTaskResponseDTO_priority;
    /** 备注 */
    remark?: string;
    /** 创建用户ID */
    createUserId?: IAssociateFormDataVO;
    /** 创建时间 */
    createTime?: number;
    /** 下级任务列表 */
    childTaskList?: IKaizenProjectTaskResponseDTO[];
}
/** 关联表单数据VO */
export interface IAssociateFormDataVO {
    /** id */
    id?: string;
    /** 关联表单显示值 */
    showFieldValue?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 是否已删除显示字段 */
    isRemovedShowField?: EAssociateFormDataVO_isRemovedShowField;
    /** 主数据ID */
    masterDataId?: string;
}

export enum EPagingInformation_projectTaskStatusList_items {
    WAIT = "WAIT",
    HANDLING = "HANDLING",
    COMPLETE = "COMPLETE",
    CANCELED = "CANCELED"
}

export enum EPagingInformation_priorityList_items {
    LOW = "LOW",
    NORMAL = "NORMAL",
    EMERGENCY = "EMERGENCY",
    EXTREME_EMERGENCY = "EXTREME_EMERGENCY"
}

export enum EPagingInformation_createTimeAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationKaizenProjectTaskResponseDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePagingInformationKaizenProjectTaskResponseDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EKaizenProjectTaskResponseDTO_projectTaskStatus {
    /** 未开始 */
    WAIT = "WAIT",
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已取消 */
    CANCELED = "CANCELED"
}

export enum EKaizenProjectTaskResponseDTO_priority {
    /** 较低 */
    LOW = "LOW",
    /** 普通 */
    NORMAL = "NORMAL",
    /** 紧急 */
    EMERGENCY = "EMERGENCY",
    /** 非常紧急 */
    EXTREME_EMERGENCY = "EXTREME_EMERGENCY"
}

export enum EAssociateFormDataVO_isRemovedShowField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
