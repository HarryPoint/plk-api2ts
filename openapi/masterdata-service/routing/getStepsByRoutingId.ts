import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/工艺路径相关/getStepsByRoutingIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; id?: number } }, extraOptions?: any) {
    return http<IJSONResultListProcessPathDetailsStepVO>(
        {
            url: "/masterdata-service/routing/getStepsByRoutingId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工艺路径详情步骤VO»» */
export interface IJSONResultListProcessPathDetailsStepVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessPathDetailsStepsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 工艺路径详情步骤VO */
export interface IProcessPathDetailsStepsVO {
    /** 工艺路径步骤id */
    id?: number;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 所属工序id */
    processId?: number;
    /** 所属工序名称 */
    processName?: string;
    /** 所属工序编号 */
    processCode?: string;
    /** 准备耗时(分钟) */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: ('SECOND' | 'MIN' | 'HOUR');
    /** 进出站方式 */
    inOutType?: ('PART' | 'ALL');
    /** 进出站方式描述 */
    inOutTypeDesc?: string;
    /** 是否允许直接出站 */
    allowDirectExit?: ('Y' | 'N');
    /** BOM物料消耗确认类型 */
    bomConsumeSureType?: ('MOVE_IN' | 'MOVE_OUT');
    /** BOM物料消耗确认类型描述 */
    bomConsumeSureTypeDesc?: string;
    /** 合格产出工费 */
    producePrice?: number;
    /** 返工产出工费 */
    backProducePrice?: number;
    /** 所属进站工艺卡id */
    processSheetBeforeId?: number;
    /** 所属进站工艺卡名称 */
    processSheetBeforeName?: string;
    /** 所属进站工艺卡编号 */
    processSheetBeforeCode?: string;
    /** 所属出站工艺卡id */
    processSheetAfterId?: number;
    /** 所属出站工艺卡名称 */
    processSheetAfterName?: string;
    /** 所属出站工艺卡编号 */
    processSheetAfterCode?: string;
    /** 步骤对应bom详情 */
    stepBomDetails?: IProcessPathDetailsStepBomDetailsReturnToVO[];
    /** 质检方案集 */
    plans?: ITheDetailsOfTheInspectionSchemeAreReturnedToVO[];
    /** 产能-生产时间 */
    capacityProduceTime?: number;
    /** 产能-时间类型 */
    capacityTimeType?: ('SECOND' | 'MIN' | 'HOUR');
    /** 产能-生产数量 */
    capacityProduceQuantity?: number;
    /** 准备工费（元） */
    readyPrice?: number;
}
/** 工艺路径详情步骤Bom明细返回VO */
export interface IProcessPathDetailsStepBomDetailsReturnToVO {
    /** id */
    id?: number;
    /** 所属主物料bom明细id */
    materialBomDetailId?: number;
    /** 所属bom物料id */
    childMaterialId?: number;
    /** 所属bom物料名称 */
    childMaterialName?: string;
    /** 所属bom物料编号 */
    childMaterialCode?: string;
    /** 总消耗 */
    totalConsumeCount?: number;
}
/** 质检方案明细返回VO */
export interface ITheDetailsOfTheInspectionSchemeAreReturnedToVO {
    /** id */
    id?: number;
    /** 质检方案名称 */
    name?: string;
    /** 质检方案编号 */
    code?: string;
    /** 质检分类id */
    qualityInspectionCategoryId?: number;
    /** 质检分类名称 */
    qualityInspectionCategoryName?: string;
    /** 质检分类编号 */
    qualityInspectionCategoryCode?: string;
    /** 适用物料集合 */
    materialList?: IMaterialMasterDataBasicInformationIsReturnedToVO[];
    /** 质检项 */
    itemList?: IQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO[];
    /** 版次号 */
    issueCode?: string;
    /** 附件文件id */
    attachedFileId?: number;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 附件文件完整路径 */
    attachedFileUrl?: string;
    /** 附件文件名 */
    attachedFileName?: string;
    /** 备注 */
    remark?: string;
    /** 状态 */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 质检方式 */
    type?: ('ALL' | 'RADIO_SPOT_CHECK' | 'FIX_SPOT_CHECK');
    /** 质检比例 */
    qualityInspectionRatio?: number;
    /** 质检数量 */
    qualityInspectionQuantity?: number;
    /** 质检方式描述 */
    typeDesc?: string;
}
/** 物料主数据基础信息返回VO */
export interface IMaterialMasterDataBasicInformationIsReturnedToVO {
    /** 物料id */
    id?: number;
    /** 物料名称 */
    name?: string;
    /** 物料编号 */
    code?: string;
    /** 物料单位 */
    unit?: string;
    /** 版次号 */
    issueCode?: string;
    /** 物料规格 */
    spec?: string;
    /** 计量单位id */
    unitId?: number;
    /** 库存可使用数 */
    storageUseQuantity?: number;
}
/** 质检方案质检项关联信息返回VO */
export interface IQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO {
    /** 关联id */
    id?: number;
    /** 所属质检方案 */
    qualityInspectionPlanId?: number;
    /** 所属质检项id */
    qualityInspectionItemId?: number;
    /** 所属质检项名称 */
    qualityInspectionItemName?: string;
    /** 所属质检项编号 */
    qualityInspectionItemCode?: string;
    /** 质检方式 */
    qualityMethod?: ('NUMBER_COMPARE' | 'ARTIFICIAL');
    /** 质检方式描述 */
    qualityMethodDesc?: string;
    /** 选择方式 */
    selectType?: ('SELECTOR' | 'CHECKBOX');
    /** 选择描述 */
    selectTypeDesc?: string;
    /** 选择项 */
    selectorList?: ITheInspectionItemOptionReturnsVO[];
    /** 数值质检标准 */
    numberStandard?: ('BETWEEN' | 'GT' | 'GE' | 'LT' | 'LE');
    /** 数值质检标准描述 */
    numberStandardDesc?: string;
    /** 比较数值 */
    compareNumber?: number;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
    /** 质检标准说明 */
    standardDesc?: string;
}
/** 质检项选择项返回VO */
export interface ITheInspectionItemOptionReturnsVO {
    /** 选择项名称 */
    name?: string;
}
