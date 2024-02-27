import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/安灯相关/getWorkOrderLogUsingPOST
*/
export default function fetchMethod(options: { data: IJobLogSearchVO }, extraOptions?: any) {
    return http<IJSONResultThePageInformationWorkOrderLogReturnsVO>(
        {
            url: "/app-mobile-web/api/app/mobile/andon/getWorkOrderLog",
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
    flowPathId?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工单id */
    id?: string;
    /** 业务流程系统类型 */
    flowPathSystemType?: EJobLogSearchVO_flowPathSystemType;
    /** 业务数据ID列表 */
    businessDataId?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
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
    ts?: string;
}
/** 分页信息«工单日志返回VO» */
export interface IThePageInformationTicketLogReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheTicketLogReturnsVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationTicketLogReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationTicketLogReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 工单日志返回VO */
export interface ITheTicketLogReturnsVO {
    /** id */
    id?: string;
    /** 所属流程工单id */
    flowPathWorkOrderId?: string;
    /** 所属流程节点id */
    flowPathNodeId?: string;
    /** 流程节点名称 */
    flowPathNodeName?: string;
    /** 是否首节点 */
    isFirstNode?: ETheTicketLogReturnsVO_isFirstNode;
    /** 日志描述 */
    description?: string;
    /** 创建时间 */
    createTime?: number;
    /** 抄送人 */
    carbonCopyUsers?: ICcToVO[];
    /** 执行人 */
    handleUsers?: IToBeCopiedToVO1[];
    /** 流程任务id */
    flowPathTaskId?: string;
    /** 执行意见 */
    notes?: string;
}
/** 待办抄送人VO */
export interface ICcToVO {
    /** 抄送人id */
    userId?: string;
    /** 抄送人姓名 */
    username?: string;
    /** 是否已读 */
    isRead?: ECcToVO_isRead;
}
/** 待办抄送人VO_1 */
export interface IToBeCopiedToVO1 {
    /** 操作人 */
    userId?: string;
    /** 操作人姓名 */
    username?: string;
    /** 执行意见 */
    notes?: string;
    /** 创建时间(被转交方-转交时间) */
    createTime?: number;
    /** 接受时间 */
    acceptTime?: number;
    /** 开始时间 */
    beginningTime?: number;
    /** 完成时间(当logStatus=TRANSFER时，为：转交方-转交时间) */
    completeTime?: number;
    /** 日志状态 */
    logStatus?: EToBeCopiedToVO1_logStatus;
    /** 日志状态描述 */
    logStatusDesc?: string;
    /** 下个节点执行人列表 */
    nextNodeExecutorList?: INextNodeExecutor[];
    /** 转交给用户id */
    transferToUserId?: string;
    /** 转交给用户名称 */
    transferToUserName?: string;
    /** 转交来源用户id */
    transferFromUserId?: string;
    /** 转交来源用户名称 */
    transferFromUserName?: string;
}
/** 下个节点执行人 */
export interface INextNodeExecutor {
    /** 抄送人id */
    userId?: string;
    /** 抄送人姓名 */
    username?: string;
}

export enum EJobLogSearchVO_flowPathSystemType {
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE",
    /** 生产订单 */
    PRODUCE_ORDER = "PRODUCE_ORDER",
    /** 安灯 */
    ANDON = "ANDON",
    /** 员工 */
    EMPLOYEE = "EMPLOYEE",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 区域 */
    AREA = "AREA",
    /** 客户 */
    CUSTOMER = "CUSTOMER",
    /** 工艺路径 */
    ROUTING = "ROUTING",
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 物料BOM */
    MATERIAL_BOM = "MATERIAL_BOM",
    /** 工序 */
    PROCESS = "PROCESS",
    /** 职位 */
    POSITION = "POSITION",
    /** 银行 */
    BANK = "BANK",
    /** 单位 */
    UNIT = "UNIT",
    /** 物料库存 */
    WAREHOUSE_MATERIAL_RP = "WAREHOUSE_MATERIAL_RP",
    /** 模具 */
    MOLD = "MOLD",
    /** 调拨类型 */
    ALLOCATION_TYPE = "ALLOCATION_TYPE",
    /** 入库类型 */
    IN_STORAGE_TYPE = "IN_STORAGE_TYPE",
    /** 出库类型 */
    OUT_STORAGE_TYPE = "OUT_STORAGE_TYPE",
    /** 其他入库单 */
    OTHER_IN_STORAGE_ORDER = "OTHER_IN_STORAGE_ORDER",
    /** 其他出库单 */
    OTHER_OUT_STORAGE_ORDER = "OTHER_OUT_STORAGE_ORDER",
    /** 调拨单 */
    ALLOCATION_ORDER = "ALLOCATION_ORDER",
    /** 盘亏单 */
    INVENTORY_LOSSES_ORDER = "INVENTORY_LOSSES_ORDER",
    /** 盘盈单 */
    INVENTORY_PROFIT_ORDER = "INVENTORY_PROFIT_ORDER",
    /** 设备 */
    DEVICE = "DEVICE",
    /** 设备类型 */
    DEVICE_TYPE = "DEVICE_TYPE",
    /** 备件 */
    DEVICE_PARTS = "DEVICE_PARTS",
    /** 设备人员能力 */
    DEVICE_EMPLOYEE_CAPACITY = "DEVICE_EMPLOYEE_CAPACITY",
    /** 设备保养方案 */
    DEVICE_MAINTAIN_SCHEME = "DEVICE_MAINTAIN_SCHEME",
    /** 设备保养计划 */
    DEVICE_MAINTAIN_PLAN = "DEVICE_MAINTAIN_PLAN",
    /** 设备保养任务 */
    DEVICE_MAINTAIN_TASK = "DEVICE_MAINTAIN_TASK",
    /** 产线 */
    PRODUCTION_LINE = "PRODUCTION_LINE",
    /** 销售计划 */
    SALES_PLAN = "SALES_PLAN",
    /** 报价单 */
    QUOTE_BILL = "QUOTE_BILL",
    /** 跟进记录 */
    FOLLOW_RECORD = "FOLLOW_RECORD",
    /** 跟进计划 */
    FOLLOW_PLAN = "FOLLOW_PLAN",
    /** 工作日报 */
    DAILY_WORK = "DAILY_WORK",
    /** 合同管理 */
    CONTRACT = "CONTRACT",
    /** 商机 */
    BUSINESS_CHANCE = "BUSINESS_CHANCE",
    /** 客户转移 */
    CUSTOMER_TRANSFER = "CUSTOMER_TRANSFER",
    /** 回款单 */
    RECEIPT = "RECEIPT",
    /** 员工 */
    USER = "USER",
    /** 改善类别 */
    IMPROVEMENT_CATEGORY = "IMPROVEMENT_CATEGORY",
    /** 合理化建议 */
    PROPOSAL = "PROPOSAL",
    /** Kaizen项目任务 */
    KAIZEN_PROJECT_TASK = "KAIZEN_PROJECT_TASK",
    /** Kaizen项目 */
    KAIZEN_PROJECT = "KAIZEN_PROJECT",
    /** 合理化建议评分 */
    PROPOSAL_SCORE = "PROPOSAL_SCORE",
    /** 部门年目标设置 */
    DEPARTMENT_YEAR_TARGET_SETTING = "DEPARTMENT_YEAR_TARGET_SETTING",
    /** 供应商 */
    SUPPLIER = "SUPPLIER",
    /** 采购订单 */
    PURCHASE_ORDER = "PURCHASE_ORDER",
    /** 收付款账户 */
    PAYMENT_ACCOUNT = "PAYMENT_ACCOUNT",
    /** 采购入库单 */
    PURCHASE_IN_ORDER = "PURCHASE_IN_ORDER",
    /** 采购退货单 */
    PURCHASE_RETURN_ORDER = "PURCHASE_RETURN_ORDER",
    /** 付款单 */
    PAYMENT_ORDER = "PAYMENT_ORDER",
    /** 付款退款单 */
    PAYMENT_RETURN_ORDER = "PAYMENT_RETURN_ORDER",
    /** 预付款单 */
    PREPAID_ORDER = "PREPAID_ORDER",
    /** 销售订单 */
    SALES_ORDER = "SALES_ORDER",
    /** 销售出库单 */
    SALES_OUT_STORAGE_ORDER = "SALES_OUT_STORAGE_ORDER",
    /** 销售退货单 */
    SALES_RETURN_ORDER = "SALES_RETURN_ORDER",
    /** 收款单 */
    RECEIVABLE_ORDER = "RECEIVABLE_ORDER",
    /** 收款退款单 */
    RECEIVABLE_RETURN_ORDER = "RECEIVABLE_RETURN_ORDER",
    /** 预收款单 */
    PRE_RECEIVABLE_ORDER = "PRE_RECEIVABLE_ORDER",
    /** 生产领料单 */
    PRODUCTION_MATERIAL_ISSUANCE_ORDER = "PRODUCTION_MATERIAL_ISSUANCE_ORDER",
    /** 生产退料单 */
    PRODUCTION_MATERIAL_RETURN_ORDER = "PRODUCTION_MATERIAL_RETURN_ORDER",
    /** 生产入库单 */
    PRODUCTION_STOCK_IN_ORDER = "PRODUCTION_STOCK_IN_ORDER",
    /** 生产退库单 */
    PRODUCTION_STOCK_RETURN_ORDER = "PRODUCTION_STOCK_RETURN_ORDER",
    /** 费用类型 */
    PRODUCE_FEE_TYPE = "PRODUCE_FEE_TYPE",
    /** 费用归集 */
    PRODUCE_FEE_COLLECT = "PRODUCE_FEE_COLLECT",
    /** 项目 */
    PROJECT = "PROJECT",
    /** 项目类型 */
    PROJECT_TYPE = "PROJECT_TYPE",
    /** 项目风险类型 */
    PROJECT_RISK_TYPE = "PROJECT_RISK_TYPE",
    /** 项目风险标识 */
    PROJECT_RISK_FLAG = "PROJECT_RISK_FLAG",
    /** 项目计划 */
    PROJECT_PLAN = "PROJECT_PLAN",
    /** 项目阶段 */
    PROJECT_STAGE = "PROJECT_STAGE",
    /** 项目任务 */
    PROJECT_TASK = "PROJECT_TASK",
    /** 评审任务 */
    PROJECT_TASK_REVIEW = "PROJECT_TASK_REVIEW",
    /** 决策任务 */
    PROJECT_TASK_DECISION = "PROJECT_TASK_DECISION",
    /** 项目任务类型 */
    PROJECT_TASK_TYPE = "PROJECT_TASK_TYPE",
    /** 项目成员 */
    PROJECT_MEMBER = "PROJECT_MEMBER",
    /** 项目角色 */
    PROJECT_ROLE = "PROJECT_ROLE",
    /** 项目风险 */
    PROJECT_RISK = "PROJECT_RISK",
    /** 项目费用 */
    PROJECT_FEE = "PROJECT_FEE",
    /** 质量问题 */
    PROJECT_QUALITY_ISSUE = "PROJECT_QUALITY_ISSUE",
    /** 质量目标 */
    PROJECT_QUALITY_TARGET = "PROJECT_QUALITY_TARGET",
    /** 项目会议纪要 */
    PROJECT_MEETING_SUMMARY = "PROJECT_MEETING_SUMMARY",
    /** 行动项 */
    PROJECT_ACTION_ITEM = "PROJECT_ACTION_ITEM",
    /** 领导批示 */
    PROJECT_LEADER_INSTRUCT = "PROJECT_LEADER_INSTRUCT",
    /** 项目大事记 */
    PROJECT_MEMORABILIA = "PROJECT_MEMORABILIA",
    /** 项目简报 */
    PROJECT_BRIEF_REPORT = "PROJECT_BRIEF_REPORT",
    /** 项目信息变更单 */
    PROJECT_MODIFICATION = "PROJECT_MODIFICATION",
    /** 项目计划变更单 */
    PROJECT_PLAN_MODIFICATION = "PROJECT_PLAN_MODIFICATION",
    /** 项目成员变更单 */
    PROJECT_MEMBER_MODIFICATION = "PROJECT_MEMBER_MODIFICATION",
    /** 项目文件 */
    PROJECT_FILE = "PROJECT_FILE",
    /** 项目文件夹 */
    PROJECT_FOLDER = "PROJECT_FOLDER",
    /** 年度质量目标 */
    QMS_ANNUAL_QUALITY_TARGET = "QMS_ANNUAL_QUALITY_TARGET",
    /** 质量工作计划 */
    QMS_QUALITY_WORK_PLAN = "QMS_QUALITY_WORK_PLAN",
    /** 未完成情况分析报告 */
    QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT = "QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT",
    /** 内部审核实施计划 */
    QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN",
    /** 内部审核检查记录 */
    QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS = "QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS",
    /** 内部审核不符合项报告 */
    QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT",
    /** 内部审核建议项清单 */
    QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS = "QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS",
    /** 内部审核报告 */
    QMS_INTERNAL_AUDIT_REPORT = "QMS_INTERNAL_AUDIT_REPORT",
    /** 内部审核不符合项纠正措施 */
    QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    /** 目标项 */
    QMS_TARGET_ITEM = "QMS_TARGET_ITEM",
    /** 条款号及检查内容 */
    QMS_REGULATION_NO_AND_CONTENT = "QMS_REGULATION_NO_AND_CONTENT",
    /** 外部审核实施计划 */
    QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN",
    /** 外部审核不符合项报告 */
    QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT",
    /** 外部审核建议项清单 */
    QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS = "QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS",
    /** 外部审核不符合项纠正措施 */
    QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    /** 外部审核报告 */
    QMS_EXTERNAL_AUDIT_REPORT = "QMS_EXTERNAL_AUDIT_REPORT",
    /** 专项审核实施计划 */
    QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN",
    /** 专项审核检查记录 */
    QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS = "QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS",
    /** 专项审核不符合项报告 */
    QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT",
    /** 专项审核不符合项纠正措施 */
    QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    /** 专项审核建议项清单 */
    QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS = "QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS",
    /** 专项审核报告 */
    QMS_SPECIAL_AUDIT_REPORT = "QMS_SPECIAL_AUDIT_REPORT",
    /** 管理评审计划 */
    QMS_MANAGEMENT_REVIEW_PLAN = "QMS_MANAGEMENT_REVIEW_PLAN",
    /** 管理评审输入材料 */
    QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL = "QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL",
    /** 管理评审报告 */
    QMS_MANAGEMENT_REVIEW_REPORT = "QMS_MANAGEMENT_REVIEW_REPORT",
    /** 物料检验类别 */
    QMS_INSPECTION_CATEGORY = "QMS_INSPECTION_CATEGORY",
    /** 检验方法 */
    QMS_INSPECTION_METHOD = "QMS_INSPECTION_METHOD",
    /** 抽样标准 */
    QMS_SAMPLING_STANDARDS = "QMS_SAMPLING_STANDARDS",
    /** 检验项 */
    QMS_INSPECTION_ITEMS = "QMS_INSPECTION_ITEMS",
    /** 检验方案 */
    QMS_INSPECTION_SCHEME = "QMS_INSPECTION_SCHEME",
    /** 来料报检单 */
    QMS_INCOMING_INSPECTION_APPLY_FORM = "QMS_INCOMING_INSPECTION_APPLY_FORM",
    /** 来料检验任务 */
    QMS_INCOMING_INSPECTION_TASK = "QMS_INCOMING_INSPECTION_TASK",
    /** 来料检验报告 */
    QMS_INCOMING_INSPECTION_REPORT = "QMS_INCOMING_INSPECTION_REPORT",
    /** 首检报检单 */
    QMS_FIRST_INSPECTION_APPLY_FORM = "QMS_FIRST_INSPECTION_APPLY_FORM",
    /** 首检检验任务 */
    QMS_FIRST_INSPECTION_TASK = "QMS_FIRST_INSPECTION_TASK",
    /** 首检检验报告 */
    QMS_FIRST_INSPECTION_REPORT = "QMS_FIRST_INSPECTION_REPORT",
    /** 工序报检单 */
    QMS_PROCESS_INSPECTION_APPLY_FORM = "QMS_PROCESS_INSPECTION_APPLY_FORM",
    /** 工序检验任务 */
    QMS_PROCESS_INSPECTION_TASK = "QMS_PROCESS_INSPECTION_TASK",
    /** 工序检验报告 */
    QMS_PROCESS_INSPECTION_REPORT = "QMS_PROCESS_INSPECTION_REPORT",
    /** 成品报检单 */
    QMS_PRODUCT_INSPECTION_APPLY_FORM = "QMS_PRODUCT_INSPECTION_APPLY_FORM",
    /** 成品检验任务 */
    QMS_PRODUCT_INSPECTION_TASK = "QMS_PRODUCT_INSPECTION_TASK",
    /** 成品检验报告 */
    QMS_PRODUCT_INSPECTION_REPORT = "QMS_PRODUCT_INSPECTION_REPORT",
    /** 出货报检单 */
    QMS_SHIPMENT_INSPECTION_APPLY_FORM = "QMS_SHIPMENT_INSPECTION_APPLY_FORM",
    /** 出货检验任务 */
    QMS_SHIPMENT_INSPECTION_TASK = "QMS_SHIPMENT_INSPECTION_TASK",
    /** 出货检验报告 */
    QMS_SHIPMENT_INSPECTION_REPORT = "QMS_SHIPMENT_INSPECTION_REPORT",
    /** 质量人员 */
    QMS_QUALITY_PERSONNEL = "QMS_QUALITY_PERSONNEL",
    /** 不合格原因 */
    QMS_REASON_OF_NON_CONFORMANCE = "QMS_REASON_OF_NON_CONFORMANCE",
    /** 不合格品处理方式 */
    QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT = "QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT",
    /** 来料不合格品处理 */
    QMS_HANDLING_OF_INCOMING_NON_CONFORMING = "QMS_HANDLING_OF_INCOMING_NON_CONFORMING",
    /** 出货不合格品处理 */
    QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING = "QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING",
    /** 成品不合格品处理 */
    QMS_HANDLE_PRODUCT_NON_CONFORMING = "QMS_HANDLE_PRODUCT_NON_CONFORMING",
    /** 质量问题信息报告单 */
    QMS_QUALITY_ISSUE_INFORMATION_REPORT = "QMS_QUALITY_ISSUE_INFORMATION_REPORT",
    /** 质量问题分析报告单 */
    QMS_QUALITY_PROBLEM_ANALYSIS_REPORT = "QMS_QUALITY_PROBLEM_ANALYSIS_REPORT",
    /** 质量问题纠正措施实施报告单 */
    QMS_QUALITY_CORRECTIVE_ACTION_REPORT = "QMS_QUALITY_CORRECTIVE_ACTION_REPORT",
    /** 8D报告单 */
    QMS_8D_REPORT = "QMS_8D_REPORT",
    /** 技术归零报告单 */
    QMS_TECHNICAL_ZEROING_REPORT = "QMS_TECHNICAL_ZEROING_REPORT",
    /** 管理归零报告单 */
    QMS_MANAGE_ZEROING_REPORT = "QMS_MANAGE_ZEROING_REPORT",
    /** FRACAS报告单 */
    QMS_FRACAS_REPORT = "QMS_FRACAS_REPORT",
    /** 改进项目 */
    QMS_IMPROVEMENT_PROJECT = "QMS_IMPROVEMENT_PROJECT",
    /** 首检不合格品处理 */
    QMS_HANDLE_FIRST_INSPECT_DEFECTS = "QMS_HANDLE_FIRST_INSPECT_DEFECTS",
    /** 工序检不合格品处理 */
    QMS_HANDLE_PROCESS_INSPECT_DEFECTS = "QMS_HANDLE_PROCESS_INSPECT_DEFECTS",
    /** 巡检不合格品处理 */
    QMS_HANDLE_PATROL_INSPECT_DEFECTS = "QMS_HANDLE_PATROL_INSPECT_DEFECTS",
    /** 质量先进集体申报 */
    QMS_ADVANCE_TEAM_DECLARE = "QMS_ADVANCE_TEAM_DECLARE",
    /** 质量先进个人申报 */
    QMS_ADVANCE_PERSONNEL_DECLARE = "QMS_ADVANCE_PERSONNEL_DECLARE",
    /** 质量月报填报 */
    QMS_QUALITY_MONTH_REPORT_FILL = "QMS_QUALITY_MONTH_REPORT_FILL",
    /** 印章式样 */
    QMS_SEAL_STYLE = "QMS_SEAL_STYLE",
    /** 印章领用申请 */
    QMS_SEAL_APPLY_FOR_RECEIVING = "QMS_SEAL_APPLY_FOR_RECEIVING",
    /** 印章挂失申请 */
    QMS_SEAL_APPLY_FOR_REPORT_LOSS = "QMS_SEAL_APPLY_FOR_REPORT_LOSS",
    /** 印章台账 */
    QMS_SEAL_LEDGER = "QMS_SEAL_LEDGER",
    /** 印章销号申请 */
    QMS_SEAL_APPLY_FOR_CANCELLATION = "QMS_SEAL_APPLY_FOR_CANCELLATION",
    /** 印章更换申请 */
    QMS_SEAL_APPLY_FOR_REPLACEMENT = "QMS_SEAL_APPLY_FOR_REPLACEMENT",
    /** 巡检计划 */
    QMS_PATROL_INSPECTION_PLAN = "QMS_PATROL_INSPECTION_PLAN",
    /** 巡检任务 */
    QMS_PATROL_INSPECTION_TASK = "QMS_PATROL_INSPECTION_TASK",
    /** 巡检报告 */
    QMS_PATROL_INSPECTION_REPORT = "QMS_PATROL_INSPECTION_REPORT",
    /** 文件分类 */
    FILE_CATEGORY = "FILE_CATEGORY",
    /** 文件对象 */
    FILE_OBJECT = "FILE_OBJECT"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePageInformationTicketLogReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationTicketLogReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheTicketLogReturnsVO_isFirstNode {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ECcToVO_isRead {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EToBeCopiedToVO1_logStatus {
    /** 已执行 */
    HANDLED = "HANDLED",
    /** 已审批 */
    PASS = "PASS",
    /** 已拒绝 */
    REFUSE = "REFUSE",
    /** 待接受 */
    WAIT_ACCEPT = "WAIT_ACCEPT",
    /** 已退回 */
    BACK = "BACK",
    /** 待执行 */
    WAIT_EXECUTE = "WAIT_EXECUTE",
    /** 待审批 */
    WAIT_APPROVAL = "WAIT_APPROVAL",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 已转交 */
    TRANSFER = "TRANSFER",
    /** 待开始 */
    WAIT_BEGINNING = "WAIT_BEGINNING"
}
