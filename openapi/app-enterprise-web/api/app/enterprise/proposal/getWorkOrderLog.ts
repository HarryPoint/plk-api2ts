import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/合理化建议相关/getWorkOrderLogUsingPOST_24
*/
export default function fetchMethod(options: { data: IJobLogSearchVO }, extraOptions?: any) {
    return http<IJSONResultThePageInformationWorkOrderLogReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/proposal/getWorkOrderLog",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 工单日志搜索VO */
export interface IJobLogSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 业务流程ID */
    flowPathId?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工单id */
    id?: number;
    /** 业务流程系统类型 */
    flowPathSystemType?: ('STOREHOUSE' | 'WAREHOUSE' | 'PRODUCE_ORDER' | 'ANDON' | 'EMPLOYEE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'AREA' | 'CUSTOMER' | 'ROUTING' | 'MATERIAL' | 'MATERIAL_BOM' | 'PROCESS' | 'POSITION' | 'BANK' | 'UNIT' | 'WAREHOUSE_MATERIAL_RP' | 'MOLD' | 'ALLOCATION_TYPE' | 'IN_STORAGE_TYPE' | 'OUT_STORAGE_TYPE' | 'OTHER_IN_STORAGE_ORDER' | 'OTHER_OUT_STORAGE_ORDER' | 'ALLOCATION_ORDER' | 'INVENTORY_LOSSES_ORDER' | 'INVENTORY_PROFIT_ORDER' | 'DEVICE' | 'DEVICE_TYPE' | 'DEVICE_PARTS' | 'DEVICE_EMPLOYEE_CAPACITY' | 'DEVICE_MAINTAIN_SCHEME' | 'DEVICE_MAINTAIN_PLAN' | 'DEVICE_MAINTAIN_TASK' | 'PRODUCTION_LINE' | 'SALES_PLAN' | 'QUOTE_BILL' | 'FOLLOW_RECORD' | 'FOLLOW_PLAN' | 'DAILY_WORK' | 'CONTRACT' | 'BUSINESS_CHANCE' | 'CUSTOMER_TRANSFER' | 'RECEIPT' | 'USER' | 'IMPROVEMENT_CATEGORY' | 'PROPOSAL' | 'KAIZEN_PROJECT_TASK' | 'KAIZEN_PROJECT' | 'PROPOSAL_SCORE' | 'DEPARTMENT_YEAR_TARGET_SETTING' | 'SUPPLIER' | 'PURCHASE_ORDER' | 'PAYMENT_ACCOUNT' | 'PURCHASE_IN_ORDER' | 'PURCHASE_RETURN_ORDER' | 'PAYMENT_ORDER' | 'PAYMENT_RETURN_ORDER' | 'PREPAID_ORDER' | 'SALES_ORDER' | 'SALES_OUT_STORAGE_ORDER' | 'SALES_RETURN_ORDER' | 'RECEIVABLE_ORDER' | 'RECEIVABLE_RETURN_ORDER' | 'PRE_RECEIVABLE_ORDER' | 'PRODUCTION_MATERIAL_ISSUANCE_ORDER' | 'PRODUCTION_MATERIAL_RETURN_ORDER' | 'PRODUCTION_STOCK_IN_ORDER' | 'PRODUCTION_STOCK_RETURN_ORDER' | 'PRODUCE_FEE_TYPE' | 'PRODUCE_FEE_COLLECT' | 'PROJECT' | 'PROJECT_TYPE' | 'PROJECT_RISK_TYPE' | 'PROJECT_RISK_FLAG' | 'PROJECT_PLAN' | 'PROJECT_STAGE' | 'PROJECT_TASK' | 'PROJECT_TASK_REVIEW' | 'PROJECT_TASK_DECISION' | 'PROJECT_TASK_TYPE' | 'PROJECT_MEMBER' | 'PROJECT_ROLE' | 'PROJECT_RISK' | 'PROJECT_FEE' | 'PROJECT_QUALITY_ISSUE' | 'PROJECT_QUALITY_TARGET' | 'PROJECT_MEETING_SUMMARY' | 'PROJECT_ACTION_ITEM' | 'PROJECT_LEADER_INSTRUCT' | 'PROJECT_MEMORABILIA' | 'PROJECT_BRIEF_REPORT' | 'PROJECT_MODIFICATION' | 'PROJECT_PLAN_MODIFICATION' | 'PROJECT_MEMBER_MODIFICATION' | 'QMS_ANNUAL_QUALITY_TARGET' | 'QMS_QUALITY_WORK_PLAN' | 'QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT' | 'QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_INTERNAL_AUDIT_REPORT' | 'QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_TARGET_ITEM' | 'QMS_REGULATION_NO_AND_CONTENT' | 'QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_EXTERNAL_AUDIT_REPORT' | 'QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS' | 'QMS_SPECIAL_AUDIT_REPORT' | 'QMS_MANAGEMENT_REVIEW_PLAN' | 'QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL' | 'QMS_MANAGEMENT_REVIEW_REPORT' | 'QMS_INSPECTION_CATEGORY' | 'QMS_INSPECTION_METHOD' | 'QMS_SAMPLING_STANDARDS' | 'QMS_INSPECTION_ITEMS' | 'QMS_INSPECTION_SCHEME' | 'QMS_INCOMING_INSPECTION_APPLY_FORM' | 'QMS_INCOMING_INSPECTION_TASK' | 'QMS_INCOMING_INSPECTION_REPORT' | 'QMS_FIRST_INSPECTION_APPLY_FORM' | 'QMS_FIRST_INSPECTION_TASK' | 'QMS_FIRST_INSPECTION_REPORT' | 'QMS_PROCESS_INSPECTION_APPLY_FORM' | 'QMS_PROCESS_INSPECTION_TASK' | 'QMS_PROCESS_INSPECTION_REPORT' | 'QMS_PRODUCT_INSPECTION_APPLY_FORM' | 'QMS_PRODUCT_INSPECTION_TASK' | 'QMS_PRODUCT_INSPECTION_REPORT' | 'QMS_SHIPMENT_INSPECTION_APPLY_FORM' | 'QMS_SHIPMENT_INSPECTION_TASK' | 'QMS_SHIPMENT_INSPECTION_REPORT' | 'QMS_QUALITY_PERSONNEL' | 'QMS_REASON_OF_NON_CONFORMANCE' | 'QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT' | 'QMS_HANDLING_OF_INCOMING_NON_CONFORMING' | 'QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING' | 'QMS_HANDLE_PRODUCT_NON_CONFORMING' | 'QMS_QUALITY_ISSUE_INFORMATION_REPORT' | 'QMS_QUALITY_PROBLEM_ANALYSIS_REPORT' | 'QMS_QUALITY_CORRECTIVE_ACTION_REPORT' | 'QMS_8D_REPORT' | 'QMS_TECHNICAL_ZEROING_REPORT' | 'QMS_MANAGE_ZEROING_REPORT' | 'QMS_FRACAS_REPORT' | 'QMS_IMPROVEMENT_PROJECT' | 'QMS_HANDLE_FIRST_INSPECT_DEFECTS' | 'QMS_HANDLE_PROCESS_INSPECT_DEFECTS' | 'QMS_HANDLE_PATROL_INSPECT_DEFECTS' | 'QMS_ADVANCE_TEAM_DECLARE' | 'QMS_ADVANCE_PERSONNEL_DECLARE' | 'QMS_QUALITY_MONTH_REPORT_FILL' | 'QMS_SEAL_STYLE' | 'QMS_SEAL_APPLY_FOR_RECEIVING' | 'QMS_SEAL_APPLY_FOR_REPORT_LOSS' | 'QMS_SEAL_LEDGER' | 'QMS_SEAL_APPLY_FOR_CANCELLATION' | 'QMS_SEAL_APPLY_FOR_REPLACEMENT' | 'QMS_PATROL_INSPECTION_PLAN' | 'QMS_PATROL_INSPECTION_TASK' | 'QMS_PATROL_INSPECTION_REPORT' | 'FILE_CATEGORY' | 'FILE_OBJECT');
    /** 业务数据ID列表 */
    businessDataId?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«工单日志返回VO»» */
export interface IJSONResultThePageInformationWorkOrderLogReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePageInformationTicketLogReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«工单日志返回VO» */
export interface IThePageInformationTicketLogReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheTicketLogReturnsVO[];
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
/** 工单日志返回VO */
export interface ITheTicketLogReturnsVO {
    /** id */
    id?: number;
    /** 所属流程工单id */
    flowPathWorkOrderId?: number;
    /** 所属流程节点id */
    flowPathNodeId?: number;
    /** 流程节点名称 */
    flowPathNodeName?: string;
    /** 是否首节点 */
    isFirstNode?: ('Y' | 'N');
    /** 日志描述 */
    description?: string;
    /** 创建时间 */
    createTime?: string;
    /** 抄送人 */
    carbonCopyUsers?: ICcToVO[];
    /** 执行人 */
    handleUsers?: IToBeCopiedToVO1[];
    /** 流程任务id */
    flowPathTaskId?: number;
    /** 执行意见 */
    notes?: string;
}
/** 待办抄送人VO */
export interface ICcToVO {
    /** 抄送人id */
    userId?: number;
    /** 抄送人姓名 */
    username?: string;
    /** 是否已读 */
    isRead?: ('Y' | 'N');
}
/** 待办抄送人VO_1 */
export interface IToBeCopiedToVO1 {
    /** 操作人 */
    userId?: number;
    /** 操作人姓名 */
    username?: string;
    /** 执行意见 */
    notes?: string;
    /** 创建时间(被转交方-转交时间) */
    createTime?: string;
    /** 接受时间 */
    acceptTime?: string;
    /** 开始时间 */
    beginningTime?: string;
    /** 完成时间(当logStatus=TRANSFER时，为：转交方-转交时间) */
    completeTime?: string;
    /** 日志状态 */
    logStatus?: ('HANDLED' | 'PASS' | 'REFUSE' | 'WAIT_ACCEPT' | 'BACK' | 'WAIT_EXECUTE' | 'WAIT_APPROVAL' | 'CLOSE' | 'TRANSFER' | 'WAIT_BEGINNING');
    /** 日志状态描述 */
    logStatusDesc?: string;
    /** 下个节点执行人列表 */
    nextNodeExecutorList?: INextNodeExecutor[];
    /** 转交给用户id */
    transferToUserId?: number;
    /** 转交给用户名称 */
    transferToUserName?: string;
    /** 转交来源用户id */
    transferFromUserId?: number;
    /** 转交来源用户名称 */
    transferFromUserName?: string;
}
/** 下个节点执行人 */
export interface INextNodeExecutor {
    /** 抄送人id */
    userId?: number;
    /** 抄送人姓名 */
    username?: string;
}
