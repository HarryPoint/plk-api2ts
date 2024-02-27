import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目关闭相关/listUnHandleTodoUsingPOST
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListProjectAppliesTheUnprocessedBacklogReturnObject>(
        {
            url: "/masterdata-service/projectClose/listUnHandleTodo",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目应用未处理待办返回对象»» */
export interface ITheJSONResultListProjectAppliesTheUnprocessedBacklogReturnObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectApplicationUnprocessedBacklogReturnObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目应用未处理待办返回对象 */
export interface IProjectApplicationUnprocessedBacklogReturnObject {
    /** id */
    id?: string;
    /** userId */
    userId?: string;
    /** 待办编号 */
    code?: string;
    /** 流程处理类型 */
    type?: EProjectApplicationUnprocessedBacklogReturnObject_type;
    /** 对应业务id */
    businessId?: string;
    /** 状态 */
    status?: EProjectApplicationUnprocessedBacklogReturnObject_status;
    /** 所属工单ID */
    flowPathWorkOrderId?: string;
    /** 所属工单业务ID(具体数据id) */
    flowPathWorkOrderBusinessId?: string;
    /** 工单状态 */
    flowPathWorkOrderStatus?: EProjectApplicationUnprocessedBacklogReturnObject_flowPathWorkOrderStatus;
    /** 是否能跳转 */
    canRedirect?: EProjectApplicationUnprocessedBacklogReturnObject_canRedirect;
    /** pc端跳转路径 */
    webPath?: string;
    /** 移动端跳转路径 */
    mobilePath?: string;
    /** 标题 */
    title?: string;
    /** 标题表头 */
    tableHeaderList?: IItemApplicationUnprocessedBacklogHeaderReturnObject[];
    /** 表数据 */
    tableDataList?: IItemApplicationUnprocessedBacklogDataReturnObject[];
    /** 能否处理 */
    isCanHandle?: EProjectApplicationUnprocessedBacklogReturnObject_isCanHandle;
    /** 执行人 */
    executor?: string;
}
/** 项目应用未处理待办表头返回对象 */
export interface IItemApplicationUnprocessedBacklogHeaderReturnObject {
    /** 序列号(字段序列号) */
    serialNo?: string;
    /** 字段名称 */
    name?: string;
}
/** 项目应用未处理待办数据返回对象 */
export interface IItemApplicationUnprocessedBacklogDataReturnObject {
    /** 序列号 */
    serialNo?: string;
    /** 显示值 */
    showValue?: string;
}

export enum EProjectApplicationUnprocessedBacklogReturnObject_type {
    /** 由我处理 */
    HANDLE_BY_ME = "HANDLE_BY_ME",
    /** 抄送给我 */
    CARBON_COPY_TO_ME = "CARBON_COPY_TO_ME"
}

export enum EProjectApplicationUnprocessedBacklogReturnObject_status {
    /** 待处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 未读 */
    NOT_READ = "NOT_READ",
    /** 已完成 */
    HANDLED = "HANDLED",
    /** 已读 */
    READ = "READ"
}

export enum EProjectApplicationUnprocessedBacklogReturnObject_flowPathWorkOrderStatus {
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

export enum EProjectApplicationUnprocessedBacklogReturnObject_canRedirect {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectApplicationUnprocessedBacklogReturnObject_isCanHandle {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
