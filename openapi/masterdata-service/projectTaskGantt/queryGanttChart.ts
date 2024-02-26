import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务甘特图相关/queryGanttChartUsingPOST
*/
export default function fetchMethod(options: { data: QueryGanttChart }, extraOptions?: any) {
    return http<IJSONResultListProjectTaskGanttChartPhaseResponseObject>(
        {
            url: "/masterdata-service/projectTaskGantt/queryGanttChart",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务甘特图阶段响应对象»» */
export interface IJSONResultListProjectTaskGanttChartPhaseResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectTaskGanttChartPhaseResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目任务甘特图阶段响应对象 */
export interface IProjectTaskGanttChartPhaseResponseObject {
    /** 项目id */
    projectId?: number;
    /** 项目名称 */
    projectName?: string;
    /** 项目计划id */
    projectPlanId?: number;
    /** 项目计划编号 */
    projectPlanCode?: string;
    /** 项目阶段id */
    projectStageId?: number;
    /** 项目阶段名称 */
    projectStageName?: string;
    /** 项目阶段来源应用编号 */
    projectStageFromAppCode?: string;
    /** 项目阶段来源应用id */
    projectStageFromAppId?: number;
    /** 项目阶段排序 */
    projectStageSort?: number;
    /** 下级任务列表 */
    children?: IProjectTaskGanttChartTaskResponseObject[];
}
/** 项目任务甘特图任务响应对象 */
export interface IProjectTaskGanttChartTaskResponseObject {
    /** 任务id */
    id?: number;
    /** 任务名称 */
    name?: string;
    /** 任务编号 */
    code?: string;
    /** 任务开始日期 */
    planBeginTime?: string;
    /** 任务截止日期 */
    planEndTime?: string;
    /** 任务进度 */
    taskProgress?: number;
    /** 总周期 */
    totalCycle?: number;
    /** 已进行的天数 */
    doneDay?: number;
    /** 剩余天数 */
    restDay?: number;
    /** 任务类型 */
    projectTaskTypeName?: string;
    /** 任务负责人名称 */
    leaderUserNameList?: string[];
    /** 交付物名称 */
    deliverableName?: string;
    /** 任务状态 */
    taskStatus?: ('DRAFT' | 'UN_ISSUE' | 'UN_RECEIVE' | 'UN_START' | 'HANDLING' | 'COMPLETE' | 'NOT_PASS' | 'CANCEL');
    /** 当前节点 */
    processStatusName?: string;
    /** 是否超期 */
    isOverdue?: ('Y' | 'N');
    /** 超期天数(天) */
    overdueDay?: number;
    /** 前置任务列表 */
    preTaskList?: IProjectTaskPreTaskResponseObject[];
    /** 上级任务id */
    parentId?: number;
    /** 上级任务名称 */
    parentName?: string;
    /** 优先级 */
    priorityName?: string;
    /** 项目阶段id */
    projectStageId?: number;
    /** 项目阶段名称 */
    projectStageName?: string;
    /** 任务下发时间 */
    issueTime?: string;
    /** 任务接收时间 */
    receiveTime?: string;
    /** 任务实际开始时间 */
    actualBeginTime?: string;
    /** 任务实际结束时间 */
    actualEndTime?: string;
    /** 任务取消时间 */
    cancelTime?: string;
    /** 任务未通过时间 */
    noPassTime?: string;
    /** 项目id */
    projectId?: number;
    /** 项目计划id */
    projectPlanId?: number;
    /** 项目计划编号 */
    projectPlanCode?: string;
    /** 项目计划名称 */
    projectPlanName?: string;
    /** 层级 */
    level?: number;
    /** 排序 */
    sort?: number;
    /** 应用系统类型 */
    appSystemType?: ('STOREHOUSE' | 'WAREHOUSE' | 'PRODUCE_ORDER' | 'ANDON' | 'EMPLOYEE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'AREA' | 'CUSTOMER' | 'ROUTING' | 'MATERIAL' | 'MATERIAL_BOM' | 'PROCESS' | 'POSITION' | 'BANK' | 'UNIT' | 'WAREHOUSE_MATERIAL_RP' | 'MOLD' | 'ALLOCATION_TYPE' | 'IN_STORAGE_TYPE' | 'OUT_STORAGE_TYPE' | 'OTHER_IN_STORAGE_ORDER' | 'OTHER_OUT_STORAGE_ORDER' | 'ALLOCATION_ORDER' | 'INVENTORY_LOSSES_ORDER' | 'INVENTORY_PROFIT_ORDER' | 'DEVICE' | 'DEVICE_TYPE' | 'DEVICE_PARTS' | 'DEVICE_EMPLOYEE_CAPACITY' | 'DEVICE_MAINTAIN_SCHEME' | 'DEVICE_MAINTAIN_PLAN' | 'DEVICE_MAINTAIN_TASK' | 'PRODUCTION_LINE' | 'SALES_PLAN' | 'QUOTE_BILL' | 'FOLLOW_RECORD' | 'FOLLOW_PLAN' | 'DAILY_WORK' | 'CONTRACT' | 'BUSINESS_CHANCE' | 'CUSTOMER_TRANSFER' | 'RECEIPT' | 'USER' | 'IMPROVEMENT_CATEGORY' | 'PROPOSAL' | 'KAIZEN_PROJECT_TASK' | 'KAIZEN_PROJECT' | 'PROPOSAL_SCORE' | 'DEPARTMENT_YEAR_TARGET_SETTING' | 'SUPPLIER' | 'PURCHASE_ORDER' | 'PAYMENT_ACCOUNT' | 'PURCHASE_IN_ORDER' | 'PURCHASE_RETURN_ORDER' | 'PAYMENT_ORDER' | 'PAYMENT_RETURN_ORDER' | 'PREPAID_ORDER' | 'SALES_ORDER' | 'SALES_OUT_STORAGE_ORDER' | 'SALES_RETURN_ORDER' | 'RECEIVABLE_ORDER' | 'RECEIVABLE_RETURN_ORDER' | 'PRE_RECEIVABLE_ORDER' | 'PRODUCTION_MATERIAL_ISSUANCE_ORDER' | 'PRODUCTION_MATERIAL_RETURN_ORDER' | 'PRODUCTION_STOCK_IN_ORDER' | 'PRODUCTION_STOCK_RETURN_ORDER' | 'PRODUCE_FEE_TYPE' | 'PRODUCE_FEE_COLLECT' | 'PROJECT' | 'PROJECT_TYPE' | 'PROJECT_RISK_TYPE' | 'PROJECT_RISK_FLAG' | 'PROJECT_PLAN' | 'PROJECT_STAGE' | 'PROJECT_TASK' | 'PROJECT_TASK_REVIEW' | 'PROJECT_TASK_DECISION' | 'PROJECT_TASK_TYPE' | 'PROJECT_MEMBER' | 'PROJECT_ROLE' | 'PROJECT_RISK' | 'PROJECT_FEE' | 'PROJECT_QUALITY_ISSUE' | 'PROJECT_QUALITY_TARGET' | 'PROJECT_MEETING_SUMMARY' | 'PROJECT_ACTION_ITEM' | 'PROJECT_LEADER_INSTRUCT' | 'PROJECT_MEMORABILIA' | 'PROJECT_BRIEF_REPORT' | 'PROJECT_MODIFICATION' | 'PROJECT_PLAN_MODIFICATION' | 'PROJECT_MEMBER_MODIFICATION' | 'QMS_ANNUAL_QUALITY_TARGET' | 'QMS_QUALITY_WORK_PLAN' | 'QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT' | 'QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_INTERNAL_AUDIT_REPORT' | 'QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_TARGET_ITEM' | 'QMS_REGULATION_NO_AND_CONTENT' | 'QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_EXTERNAL_AUDIT_REPORT' | 'QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS' | 'QMS_SPECIAL_AUDIT_REPORT' | 'QMS_MANAGEMENT_REVIEW_PLAN' | 'QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL' | 'QMS_MANAGEMENT_REVIEW_REPORT' | 'QMS_INSPECTION_CATEGORY' | 'QMS_INSPECTION_METHOD' | 'QMS_SAMPLING_STANDARDS' | 'QMS_INSPECTION_ITEMS' | 'QMS_INSPECTION_SCHEME' | 'QMS_INCOMING_INSPECTION_APPLY_FORM' | 'QMS_INCOMING_INSPECTION_TASK' | 'QMS_INCOMING_INSPECTION_REPORT' | 'QMS_FIRST_INSPECTION_APPLY_FORM' | 'QMS_FIRST_INSPECTION_TASK' | 'QMS_FIRST_INSPECTION_REPORT' | 'QMS_PROCESS_INSPECTION_APPLY_FORM' | 'QMS_PROCESS_INSPECTION_TASK' | 'QMS_PROCESS_INSPECTION_REPORT' | 'QMS_PRODUCT_INSPECTION_APPLY_FORM' | 'QMS_PRODUCT_INSPECTION_TASK' | 'QMS_PRODUCT_INSPECTION_REPORT' | 'QMS_SHIPMENT_INSPECTION_APPLY_FORM' | 'QMS_SHIPMENT_INSPECTION_TASK' | 'QMS_SHIPMENT_INSPECTION_REPORT' | 'QMS_QUALITY_PERSONNEL' | 'QMS_REASON_OF_NON_CONFORMANCE' | 'QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT' | 'QMS_HANDLING_OF_INCOMING_NON_CONFORMING' | 'QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING' | 'QMS_HANDLE_PRODUCT_NON_CONFORMING' | 'QMS_QUALITY_ISSUE_INFORMATION_REPORT' | 'QMS_QUALITY_PROBLEM_ANALYSIS_REPORT' | 'QMS_QUALITY_CORRECTIVE_ACTION_REPORT' | 'QMS_8D_REPORT' | 'QMS_TECHNICAL_ZEROING_REPORT' | 'QMS_MANAGE_ZEROING_REPORT' | 'QMS_FRACAS_REPORT' | 'QMS_IMPROVEMENT_PROJECT' | 'QMS_HANDLE_FIRST_INSPECT_DEFECTS' | 'QMS_HANDLE_PROCESS_INSPECT_DEFECTS' | 'QMS_HANDLE_PATROL_INSPECT_DEFECTS' | 'QMS_ADVANCE_TEAM_DECLARE' | 'QMS_ADVANCE_PERSONNEL_DECLARE' | 'QMS_QUALITY_MONTH_REPORT_FILL' | 'QMS_SEAL_STYLE' | 'QMS_SEAL_APPLY_FOR_RECEIVING' | 'QMS_SEAL_APPLY_FOR_REPORT_LOSS' | 'QMS_SEAL_LEDGER' | 'QMS_SEAL_APPLY_FOR_CANCELLATION' | 'QMS_SEAL_APPLY_FOR_REPLACEMENT' | 'QMS_PATROL_INSPECTION_PLAN' | 'QMS_PATROL_INSPECTION_TASK' | 'QMS_PATROL_INSPECTION_REPORT' | 'FILE_CATEGORY' | 'FILE_OBJECT');
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: number;
    /** 备注 */
    remark?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 下级任务列表 */
    children?: IProjectTaskGanttChartTaskResponseObject[];
}
/** 项目任务前置任务响应对象 */
export interface IProjectTaskPreTaskResponseObject {
    /** 任务id */
    id?: number;
    /** 任务名称 */
    name?: string;
    /** 任务编号 */
    code?: string;
}
