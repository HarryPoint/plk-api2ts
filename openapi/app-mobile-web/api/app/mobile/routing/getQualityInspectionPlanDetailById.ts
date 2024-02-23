import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/工艺路径相关/getQualityInspectionPlanDetailByIdUsingGET
export default function fetchMethod(params: { id: number }, extraOptions?: any) {
    return http<IJSONResultCheckSolutionDetailsAreReturnedToVO>(
        {
            url: "/app-mobile-web/api/app/mobile/routing/getQualityInspectionPlanDetailById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«质检方案明细返回VO»
export interface IJSONResultCheckSolutionDetailsAreReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheDetailsOfTheInspectionSchemeAreReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质检方案明细返回VO
export interface ITheDetailsOfTheInspectionSchemeAreReturnedToVO {
    // id
    id: number;
    // 质检方案名称
    name: string;
    // 质检方案编号
    code: string;
    // 质检分类id
    qualityInspectionCategoryId: number;
    // 质检分类名称
    qualityInspectionCategoryName: string;
    // 质检分类编号
    qualityInspectionCategoryCode: string;
    // 适用物料集合
    materialList: IMaterialMasterDataBasicInformationIsReturnedToVO[];
    // 质检项
    itemList: IQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO[];
    // 版次号
    issueCode: string;
    // 附件文件id
    attachedFileId: number;
    // 附件文件key
    attachedFileKey: string;
    // 附件文件完整路径
    attachedFileUrl: string;
    // 附件文件名
    attachedFileName: string;
    // 备注
    remark: string;
    // 状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
    // 质检方式
    type: string;
    // 质检比例
    qualityInspectionRatio: number;
    // 质检数量
    qualityInspectionQuantity: number;
    // 质检方式描述
    typeDesc: string;
}
// 物料主数据基础信息返回VO
export interface IMaterialMasterDataBasicInformationIsReturnedToVO {
    // 物料id
    id: number;
    // 物料名称
    name: string;
    // 物料编号
    code: string;
    // 物料单位
    unit: string;
    // 版次号
    issueCode: string;
    // 物料规格
    spec: string;
    // 计量单位id
    unitId: number;
    // 库存可使用数
    storageUseQuantity: number;
}
// 质检方案质检项关联信息返回VO
export interface IQualityInspectionSolutionQualityInspectionItemAssociationInformationIsReturnedToVO {
    // 关联id
    id: number;
    // 所属质检方案
    qualityInspectionPlanId: number;
    // 所属质检项id
    qualityInspectionItemId: number;
    // 所属质检项名称
    qualityInspectionItemName: string;
    // 所属质检项编号
    qualityInspectionItemCode: string;
    // 质检方式
    qualityMethod: string;
    // 质检方式描述
    qualityMethodDesc: string;
    // 选择方式
    selectType: string;
    // 选择描述
    selectTypeDesc: string;
    // 选择项
    selectorList: ITheInspectionItemOptionReturnsVO[];
    // 数值质检标准
    numberStandard: string;
    // 数值质检标准描述
    numberStandardDesc: string;
    // 比较数值
    compareNumber: number;
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 数值单位
    numberUnit: string;
    // 质检标准说明
    standardDesc: string;
}
// 质检项选择项返回VO
export interface ITheInspectionItemOptionReturnsVO {
    // 选择项名称
    name: string;
}
