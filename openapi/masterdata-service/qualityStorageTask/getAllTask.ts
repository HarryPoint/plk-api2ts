import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质检管理/getAllTaskUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; status?: Estatus } }, extraOptions?: any) {
    return http<ITheJSONResultListSalesModuleReturnsVO>(
        {
            url: "/masterdata-service/qualityStorageTask/getAllTask",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«销售模块返回VO»» */
export interface ITheJSONResultListSalesModuleReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheSalesModuleReturnsToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 销售模块返回VO */
export interface ITheSalesModuleReturnsToVO {
    /** 模块类型 */
    modelType?: ETheSalesModuleReturnsToVO_modelType;
    /** 模块名称 */
    modelName?: string;
    /** 任务集 */
    taskList?: ITheInspectionModuleTaskReturnsVO[];
    /** 存在的任务数 */
    taskTotalCount?: number;
}
/** 质检模块任务返回VO */
export interface ITheInspectionModuleTaskReturnsVO {
    /** 任务id */
    id?: number;
    /** 任务名称 */
    taskName?: string;
    /** 任务编号 */
    taskNo?: string;
    /** 计划质检时间/送检时间 */
    beginTime?: string;
    /** 对应工序id */
    processId?: number;
    /** 对应工序名称 */
    processName?: string;
    /** 对应物料id */
    materialId?: number;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料版次号 */
    materialIssueCode?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 总质检数 */
    totalInspectionQuantity?: number;
    /** 待检数 */
    waitInspectionQuantity?: number;
    /** 已检数 */
    inspectionQuantity?: number;
    /** 状态 */
    status?: ETheInspectionModuleTaskReturnsVO_status;
    /** 状态名称 */
    statusName?: string;
    /** 生产订单id */
    produceOrderId?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 送检人id */
    createUserId?: number;
    /** 送检人姓名 */
    createUsername?: string;
    /** 送检人工号 */
    createUserCode?: string;
    /** 位置 */
    position?: string;
}

export enum Estatus {
    WAIT = "WAIT",
    COMPLETE = "COMPLETE",
    CANCEL = "CANCEL",
    CLOSE = "CLOSE"
}

export enum ETheSalesModuleReturnsToVO_modelType {
    /** 质检任务 */
    QUALITY_TASK = "QUALITY_TASK",
    /** 工序检 */
    PROCESS = "PROCESS"
}

export enum ETheInspectionModuleTaskReturnsVO_status {
    /** 待质检 */
    WAIT = "WAIT",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已撤销 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}
