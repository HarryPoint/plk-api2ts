import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/getCarbonCopyInfoByWorkOrderUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; flowPathWorkOrderId?: string } }, extraOptions?: any) {
    return http<IJSONResultListToDoListVO>(
        {
            url: "/todo-service/todoList/getCarbonCopyInfoByWorkOrder",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ToDoListVO»» */
export interface IJSONResultListToDoListVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IToDoListVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ToDoListVO */
export interface IToDoListVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 所属用户id */
    userId?: string;
    /** 待办编号 */
    code?: string;
    /** 流程处理类型 */
    type?: EToDoListVO_type;
    /** 任务开始时间 */
    planBeginTime?: number;
    /** 预计结束时间（截止时间） */
    planEndTime?: number;
    /** 对应业务id */
    businessId?: string;
    /** 状态 */
    status?: EToDoListVO_status;
    /** 完成时间 */
    completeTime?: number;
    /** 发起人id */
    workOrderCreateUserId?: string;
    /** 是否超时处理 */
    isTimeout?: EToDoListVO_isTimeout;
    /** 节点处理状态描述 */
    flowPathNodeHandleStatus?: string;
    /** 工单处理状态描述 */
    flowPathWorkOrderHandleStatus?: string;
    /** 所属工单ID */
    flowPathWorkOrderId?: string;
    /** 所属工单编号 */
    flowPathWorkOrderCode?: string;
    /** 所属流程节点id */
    flowPathNodeId?: string;
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

export enum EToDoListVO_type {
    /** 由我处理 */
    HANDLE_BY_ME = "HANDLE_BY_ME",
    /** 抄送给我 */
    CARBON_COPY_TO_ME = "CARBON_COPY_TO_ME"
}

export enum EToDoListVO_status {
    /** 待处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 未读 */
    NOT_READ = "NOT_READ",
    /** 已完成 */
    HANDLED = "HANDLED",
    /** 已读 */
    READ = "READ"
}

export enum EToDoListVO_isTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
