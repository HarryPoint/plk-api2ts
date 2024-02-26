import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/任务班次相关/getPageUsingPOST_6
*/
export default function fetchMethod(options: { data: ITaskShiftSearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationFlowShiftReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathShift/getPage",
            method: "post",
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
    isAsc?: ('Y' | 'N');
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
    ts?: number;
}
/** 分页信息«流程班次返回VO» */
export interface IPagingInformationFlowShiftReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProcessShiftBackToVO[];
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
/** 流程班次返回VO */
export interface IProcessShiftBackToVO {
    /** id */
    id?: number;
    /** 班次名称 */
    name?: string;
    /** 班次编号 */
    code?: string;
    /** 开始时间 */
    beginTime?: string;
    /** 班次结束时间类型 */
    endTimeType?: ('TODAY' | 'NEXT');
    /** 结束时间 */
    endTime?: string;
    /** 状态 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 方案名称 */
    planName?: string;
    /** 班次配置的人员信息 */
    users?: IProcessNodeExecutorVO[];
}
/** 流程节点执行人VO */
export interface IProcessNodeExecutorVO {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 执行人id */
    executorId?: number;
    /** 执行人类型 */
    executorType?: ('USER' | 'ROLE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'SYS_CONTROL');
    /** 执行人系统控件类型 */
    executorSysType?: ('CREATE_BY' | 'CREATE_DEPARTMENT' | 'FLOW_PATH_TASK_PLAN');
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo?: string;
    /** flowPathId */
    flowPathId?: number;
    /** 节点ID */
    flowPathNodeId?: number;
}
