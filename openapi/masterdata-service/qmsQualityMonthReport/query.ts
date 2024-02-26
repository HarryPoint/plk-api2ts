import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质量月报报表相关/queryUsingPOST_1
*/
export default function fetchMethod(options: { data: Query }, extraOptions?: any) {
    return http<IQualityMonthlyReportRespondsToDTO>(
        {
            url: "/masterdata-service/qmsQualityMonthReport/query",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质量月报响应DTO */
export interface IQualityMonthlyReportRespondsToDTO {
    /** 月份 */
    month?: number;
    /** 进货损失 - 批产 */
    purchaseLossBatchProduction?: number;
    /** 进货损失 - 科研 */
    purchaseLossScientificResearch?: number;
    /** 废品损失 - 批产 */
    wasteLossBatchProduction?: number;
    /** 废品损失 - 科研 */
    wasteLossScientificResearch?: number;
    /** 返工和返修损失 - 批产 */
    reworkAndRepairLossBatchProduction?: number;
    /** 返工和返修损失 - 科研 */
    reworkAndRepairLossScientificResearch?: number;
    /** 停工损失 - 批产 */
    shutdownLossBatchProduction?: number;
    /** 停工损失 - 科研 */
    shutdownLossScientificResearch?: number;
    /** 降级损失 - 批产 */
    downgradingLossBatchProduction?: number;
    /** 降级损失 - 科研 */
    downgradingLossScientificResearch?: number;
    /** 不合格处理费 - 批产 */
    nonConformanceHandlingFeeBatchProduction?: number;
    /** 不合格处理费 - 科研 */
    nonConformanceHandlingFeeScientificResearch?: number;
    /** 其它与内部故障相关的支出 - 批产 */
    otherInternalFailBatchProduction?: number;
    /** 其它与内部故障相关的支出 - 科研 */
    otherInternalFailScientificResearch?: number;
    /** 一合计 - 批产 */
    sumOneBatchProduction?: number;
    /** 一合计 - 科研 */
    sumOneScientificResearch?: number;
    /** 索赔费 - 批产 */
    claimFeeBatchProduction?: number;
    /** 索赔费 - 科研 */
    claimFeeScientificResearch?: number;
    /** 退货损失 - 批产 */
    returnLossBatchProduction?: number;
    /** 退货损失 - 科研 */
    returnLossScientificResearch?: number;
    /** 降价损失 - 批产 */
    priceReductionLossBatchProduction?: number;
    /** 降价损失 - 科研 */
    priceReductionLossScientificResearch?: number;
    /** 维修费 - 批产 */
    maintenanceCostBatchProduction?: number;
    /** 维修费 - 科研 */
    maintenanceCostScientificResearch?: number;
    /** 其它与外部故障相关的支出 - 批产 */
    otherExternalFailBatchProduction?: number;
    /** 其它与外部故障相关的支出 - 科研 */
    otherExternalFailScientificResearch?: number;
    /** 二合计 - 批产 */
    sumTwoBatchProduction?: number;
    /** 二合计 - 科研 */
    sumTwoScientificResearch?: number;
    /** 内、外部故障成本合计 - 批产 */
    internalAndExternalFailCostSumBatchProduction?: number;
    /** 内、外部故障成本合计 - 科研 */
    internalAndExternalFailCostSumScientificResearch?: number;
    /** 需求分析与合同评审费 - 批产 */
    demandAnalysisAndContractReviewFeeBatchProduction?: number;
    /** 需求分析与合同评审费 - 科研 */
    demandAnalysisAndContractReviewFeeScientificResearch?: number;
    /** 设计质量控制费 - 批产 */
    designQualityControlFeeBatchProduction?: number;
    /** 设计质量控制费 - 科研 */
    designQualityControlFeeScientificResearch?: number;
    /** 采购质量控制费 - 批产 */
    purchaseQualityControlFeeBatchProduction?: number;
    /** 采购质量控制费 - 科研 */
    purchaseQualityControlFeeScientificResearch?: number;
    /** 生产质量控制费 - 批产 */
    produceQualityControlFeeBatchProduction?: number;
    /** 生产质量控制费 - 科研 */
    produceQualityControlFeeScientificResearch?: number;
    /** 成品质量控制费 - 批产 */
    productQualityControlFeeBatchProduction?: number;
    /** 成品质量控制费 - 科研 */
    productQualityControlFeeScientificResearch?: number;
    /** 顾客服务费 - 批产 */
    customerServiceFeeBatchProduction?: number;
    /** 顾客服务费 - 科研 */
    customerServiceFeeScientificResearch?: number;
    /** 质量改进费 - 批产 */
    qualityImprovementFeeBatchProduction?: number;
    /** 质量改进费 - 科研 */
    qualityImprovementFeeScientificResearch?: number;
    /** 质量管理费 - 批产 */
    qualityManagementFeeBatchProduction?: number;
    /** 质量管理费 - 科研 */
    qualityManagementFeeScientificResearch?: number;
    /** 质量奖励费 - 批产 */
    qualityRewardFeeBatchProduction?: number;
    /** 质量奖励费 - 科研 */
    qualityRewardFeeScientificResearch?: number;
    /** 职工薪酬 - 批产 */
    preventCostStaffSalaryBatchProduction?: number;
    /** 职工薪酬 - 科研 */
    preventCostStaffSalaryScientificResearch?: number;
    /** 其他与质量预防相关的支出 - 批产 */
    otherPreventBatchProduction?: number;
    /** 其他与质量预防相关的支出 - 科研 */
    otherPreventScientificResearch?: number;
    /** 三合计 - 批产 */
    sumThreeBatchProduction?: number;
    /** 三合计 - 科研 */
    sumThreeScientificResearch?: number;
    /** 进货检验费 - 批产 */
    incomingInspectionFeeBatchProduction?: number;
    /** 进货检验费 - 科研 */
    incomingInspectionFeeScientificResearch?: number;
    /** 工序检验费 - 批产 */
    processInspectionFeeBatchProduction?: number;
    /** 工序检验费 - 科研 */
    processInspectionFeeScientificResearch?: number;
    /** 成品检验费 - 批产 */
    productInspectionFeeBatchProduction?: number;
    /** 成品检验费 - 科研 */
    productInspectionFeeScientificResearch?: number;
    /** 安装检验费 - 批产 */
    installationInspectionFeeBatchProduction?: number;
    /** 安装检验费 - 科研 */
    installationInspectionFeeScientificResearch?: number;
    /** 交付检验费 - 批产 */
    deliveryInspectionFeeBatchProduction?: number;
    /** 交付检验费 - 科研 */
    deliveryInspectionFeeScientificResearch?: number;
    /** 检验、验证试验和测量管理费 - 批产 */
    inspectionAndProofTestAndSurveyManagementFeeBatchProduction?: number;
    /** 检验、验证试验和测量管理费 - 科研 */
    inspectionAndProofTestAndSurveyManagementFeeScientificResearch?: number;
    /** 检验、验证试验和测量设备费 - 批产 */
    inspectionAndProofTestAndSurveyDeviceFeeBatchProduction?: number;
    /** 检验、验证试验和测量设备费 - 科研 */
    inspectionAndProofTestAndSurveyDeviceFeeScientificResearch?: number;
    /** 职工薪酬 - 批产 */
    identifyCostStaffSalaryBatchProduction?: number;
    /** 职工薪酬 - 科研 */
    identifyCostStaffSalaryScientificResearch?: number;
    /** 其他与质量鉴定相关的支出 - 批产 */
    otherIdentifyBatchProduction?: number;
    /** 其他与质量鉴定相关的支出 - 科研 */
    otherIdentifyScientificResearch?: number;
    /** 四合计 - 批产 */
    sumFourBatchProduction?: number;
    /** 四合计 - 科研 */
    sumFourScientificResearch?: number;
    /** 预防和鉴定成本合计 - 批产 */
    preventAndIdentifyCostSumBatchProduction?: number;
    /** 预防和鉴定成本合计 - 科研 */
    preventAndIdentifyCostSumScientificResearch?: number;
    /** 质量保证措施费 - 批产 */
    qualityAssuranceMeasuresFeeBatchProduction?: number;
    /** 质量保证措施费 - 科研 */
    qualityAssuranceMeasuresFeeScientificResearch?: number;
    /** 产品质量证实实验和评定费 - 批产 */
    productQualityVerificationExperimentAndAssessmentFeeBatchProduction?: number;
    /** 产品质量证实实验和评定费 - 科研 */
    productQualityVerificationExperimentAndAssessmentFeeScientificResearch?: number;
    /** 质量认证费 - 批产 */
    qualityCertificationFeeBatchProduction?: number;
    /** 质量认证费 - 科研 */
    qualityCertificationFeeScientificResearch?: number;
    /** 五合计 - 批产 */
    sumFiveBatchProduction?: number;
    /** 五合计 - 科研 */
    sumFiveScientificResearch?: number;
    /** （同期）本期销售收入 */
    lastYearCurrentSalesIncome?: number;
    /** 本期销售收入 */
    currentSalesIncome?: number;
    /** （同期）本期总成本 */
    lastYearCurrentTotalCost?: number;
    /** 本期总成本 */
    currentTotalCost?: number;
    /** （同期）本期生产成本 */
    lastYearCurrentProduceCost?: number;
    /** 本期生产成本 */
    currentProduceCost?: number;
    /** （同期）本期工业总产值 */
    lastYearCurrentTotalIndustrialOutputValue?: number;
    /** 本期工业总产值 */
    currentTotalIndustrialOutputValue?: number;
    /** （同期）本期民品产值 */
    lastYearCurrentTotalCivilProductOutputValue?: number;
    /** 本期民品产值 */
    currentTotalCivilProductOutputValue?: number;
    /** 民品质量损失率 */
    currentCivilProductQualityLossRatio?: number;
    /** 民品内部质量损失率 */
    currentCivilProductInternalQualityLossRatio?: number;
    /** 民品外部质量损失率 */
    currentCivilProductExternalQualityLossRatio?: number;
    /** 成本质量损失率 */
    currentCostQualityLossRatio?: number;
    /** 未填报部门 */
    notReportDepartments?: IIdCodeNameGenericTransportObject[];
    /** 上报状态 */
    reportStatus?: string;
    /** 上报状态描述 */
    reportStatusDesc?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: number;
    /** code */
    code?: string;
    /** name */
    name?: string;
}
