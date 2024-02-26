import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/completeSyncUsingPOST
*/
export default function fetchMethod(options: { data: IToDoListCompletedSyncRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/todo-service/todoList/completeSync",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** ToDoListCompletedSyncRequestDTO */
export interface IToDoListCompletedSyncRequestDTO {
    /** id */
    id?: number;
    /** 所属用户id */
    userId?: number;
    /** 待办编号 */
    code?: string;
    /** 流程处理类型 */
    type?: EToDoListCompletedSyncRequestDTO_type;
    /** 任务开始时间 */
    planBeginTime?: string;
    /** 预计结束时间 */
    planEndTime?: string;
    /** 对应业务id */
    businessId?: number;
    /** 状态 */
    status?: EToDoListCompletedSyncRequestDTO_status;
    /** 完成时间 */
    completeTime?: string;
    /** 发起人id */
    workOrderCreateUserId?: number;
    /** 是否超时处理 */
    isTimeout?: EToDoListCompletedSyncRequestDTO_isTimeout;
    /** 节点处理状态描述 */
    flowPathNodeHandleStatus?: string;
    /** 工单处理状态描述 */
    flowPathWorkOrderHandleStatus?: string;
    /** 所属工单ID */
    flowPathWorkOrderId?: number;
    /** 所属工单编号 */
    flowPathWorkOrderCode?: string;
    /** 所属工单业务ID(具体数据id) */
    flowPathWorkOrderBusinessId?: number;
    /** 所属流程节点id */
    flowPathNodeId?: number;
    /** 工单状态 */
    flowPathWorkOrderStatus?: EToDoListCompletedSyncRequestDTO_flowPathWorkOrderStatus;
    /** 流程id */
    flowPathId?: number;
    /** 流程名称 */
    flowPathName?: string;
    /** 节点名称 */
    flowPathNodeName?: string;
    /** 是否能跳转 */
    canRedirect?: EToDoListCompletedSyncRequestDTO_canRedirect;
    /** pc端跳转路径 */
    webPath?: string;
    /** 移动端跳转路径 */
    mobilePath?: string;
    /** 标题 */
    title?: string;
    /** 表头 */
    tableHeaderList?: ITableheaderdto[];
    /** 表数据 */
    tableDataList?: ITabledatadto[];
}
/** TableHeaderDTO */
export interface ITableheaderdto {
    /** undefined */
    serialNo?: string;
    /** undefined */
    name?: string;
}
/** TableDataDTO */
export interface ITabledatadto {
    /** undefined */
    serialNo?: string;
    /** undefined */
    showValue?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EToDoListCompletedSyncRequestDTO_type {
    /** 由我处理 */
    HANDLE_BY_ME = "HANDLE_BY_ME",
    /** 抄送给我 */
    CARBON_COPY_TO_ME = "CARBON_COPY_TO_ME"
}

export enum EToDoListCompletedSyncRequestDTO_status {
    /** 待处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 未读 */
    NOT_READ = "NOT_READ",
    /** 已完成 */
    HANDLED = "HANDLED",
    /** 已读 */
    READ = "READ"
}

export enum EToDoListCompletedSyncRequestDTO_isTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EToDoListCompletedSyncRequestDTO_flowPathWorkOrderStatus {
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 暂存 */
    STAGING = "STAGING",
    /** 作废/停用 */
    INVALID = "INVALID"
}

export enum EToDoListCompletedSyncRequestDTO_canRedirect {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
