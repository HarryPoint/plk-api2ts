import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/任务班次相关/getPageUsingPOST_6
*/
export default function fetchMethod(options: { data: ITaskShiftSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationFlowShiftReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathShift/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 任务班次搜索VO */
export interface ITaskShiftSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 名称 */
    name?: string;
    /** 状态 */
    dataStatus?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«流程班次返回VO»» */
export interface IJSONResultPagingInformationFlowShiftReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationFlowShiftReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«流程班次返回VO» */
export interface IPagingInformationFlowShiftReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProcessShiftBackToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationFlowShiftReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationFlowShiftReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 流程班次返回VO */
export interface IProcessShiftBackToVO {
    /** id */
    id?: string;
    /** 班次名称 */
    name?: string;
    /** 班次编号 */
    code?: string;
    /** 开始时间 */
    beginTime?: number;
    /** 班次结束时间类型 */
    endTimeType?: EProcessShiftBackToVO_endTimeType;
    /** 结束时间 */
    endTime?: number;
    /** 状态 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 方案名称 */
    planName?: string;
    /** 班次配置的人员信息 */
    users?: IProcessNodeExecutorVO[];
}
/** 流程节点执行人VO */
export interface IProcessNodeExecutorVO {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 执行人id */
    executorId?: string;
    /** 执行人类型 */
    executorType?: EProcessNodeExecutorVO_executorType;
    /** 执行人系统控件类型 */
    executorSysType?: EProcessNodeExecutorVO_executorSysType;
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo?: string;
    /** flowPathId */
    flowPathId?: string;
    /** 节点ID */
    flowPathNodeId?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationFlowShiftReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationFlowShiftReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessShiftBackToVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}

export enum EProcessNodeExecutorVO_executorType {
    /** 员工 */
    USER = "USER",
    /** 角色 */
    ROLE = "ROLE",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 系统控件 */
    SYS_CONTROL = "SYS_CONTROL"
}

export enum EProcessNodeExecutorVO_executorSysType {
    /** 创建人 */
    CREATE_BY = "CREATE_BY",
    /** 创建部门 */
    CREATE_DEPARTMENT = "CREATE_DEPARTMENT",
    /** 任务方案 */
    FLOW_PATH_TASK_PLAN = "FLOW_PATH_TASK_PLAN"
}
