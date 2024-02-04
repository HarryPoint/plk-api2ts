// JSONResult«具体物料数据结构响应对象»
export interface IJSONResult具体物料数据结构响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I具体物料数据结构响应对象_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 具体物料数据结构响应对象_1
export interface I具体物料数据结构响应对象_1 {
    // 主物料id
    materialId: number;
    // 主物料名称
    materialName: string;
    // 主物料编号
    materialCode: string;
    // 主物料种类
    materialType: string;
    // 主物料单位
    materialUnit: string;
    // 物料BOM
    materialBomStructure: I具体物料数据结构响应对象;
    // 工艺路径
    materialRoutingStructure: I具体物料数关联工艺路径数据结构响应对象;
}
// 具体物料数据结构响应对象
export interface I具体物料数据结构响应对象 {
    // bomId
    bomId: number;
    // BOM名称
    bomName: string;
    // BOM编号
    bomCode: string;
    // 消耗数量
    totalConsumeCount: number;
    // Bom物料明细
    bomDetailList: I标准工艺具体物料bom详情对象[];
}
// 标准工艺具体物料bom详情对象
export interface I标准工艺具体物料bom详情对象 {
    // bom明细id
    bomDetailId: number;
    // 子物料id
    childMaterialId: number;
    // 子物料种类
    childMaterialType: string;
    // 子物料名称
    childMaterialName: string;
    // 子物料编号
    childMaterialCode: string;
    // 子物料单位
    childMaterialUnit: string;
    // 消耗数量
    totalConsumeCount: number;
    // 子物料信息
    childMaterialStructure: I具体物料数据结构响应对象_1;
}
// 具体物料数关联工艺路径数据结构响应对象
export interface I具体物料数关联工艺路径数据结构响应对象 {
    // 工艺路径id
    routingId: number;
    // 工艺路径名称
    routingName: string;
    // 工艺路径编码
    routingCode: string;
    // 工艺路径步骤集合
    materialRoutingStepList: I具体物料数关联工艺路径步骤数据结构响应对象[];
}
// 具体物料数关联工艺路径步骤数据结构响应对象
export interface I具体物料数关联工艺路径步骤数据结构响应对象 {
    // 工艺路径步骤id
    routingStepId: number;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编码
    processCode: string;
    // 工艺卡
    processSheet: I标准工艺具体工艺卡详情对象_1;
    // 关键参数
    keyParameter: IKeyParameterInformationResponseObject;
    // 产能
    capacity: I产能响应对象;
    // 工费
    laborCost: I工费响应对象;
    // 进出站确认类型
    bomConsumeSureType: string;
}
// 标准工艺具体工艺卡详情对象_1
export interface I标准工艺具体工艺卡详情对象_1 {
    // 工艺卡id
    processSheetId: number;
    // 工艺卡名称
    name: string;
    // 工艺卡编号
    code: string;
    // 工艺卡明细
    processSheetDetailStructureList: I标准工艺具体工艺卡详情对象[];
}
// 标准工艺具体工艺卡详情对象
export interface I标准工艺具体工艺卡详情对象 {
    // 明细id
    id: number;
    // 明细类型
    type: string;
    // 明细名称/标题
    name: string;
    // 明细编号
    code: string;
    // 描述内容/备注
    remark: string;
    // 文件名称
    fileName: string;
    // 文件key
    fileKey: string;
    // 文件完整url
    fileUrl: string;
    // 录入类型
    inputType: string;
    // 文本类型
    textType: string;
    // 文本比较值集
    textCompareValueList: string[];
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 数值单位
    numberUnit: string;
    // 图片最大上传量
    imageTotalCount: number;
    // 选项集
    selectorList: string[];
}
// 关键参数信息响应对象
export interface IKeyParameterInformationResponseObject {
    // id
    id: number;
    // 编号
    code: string;
    // 名称
    name: string;
    // 关联工序
    processRp: IAssociatedDropDownResponseObjects[];
    // 关联物料
    materialRp: IAssociatedDropDownResponseObjects[];
    // 关键参数集合
    parameterDetailList: IKeyParameterDetailsResponseObject[];
}
// 关联下拉响应对象
export interface IAssociatedDropDownResponseObjects {
    // id
    id: number;
    // 显示字段名称
    showFieldValue: string;
}
// 关键参数信息详情响应对象
export interface IKeyParameterDetailsResponseObject {
    // 字段id
    id: number;
    // 字段名称
    name: string;
    // 帮助提示
    remark: string;
    // 字段类型
    inputType: string;
    // 文本类型
    textType: string;
    // 文本比较值，多个英文逗号,分割
    textCompareValue: string;
    // 文本比较值集
    textCompareValueList: string[];
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 数值单位
    numberUnit: string;
    // 图片最大上传量
    imageTotalCount: number;
    // 选项集，多个英文逗号,分割
    selector: string;
    // 选项集
    selectorList: string[];
}
// 产能响应对象
export interface I产能响应对象 {
    // id
    id: number;
    // 编号
    code: string;
    // 名称
    name: string;
    // 关联工序
    processRp: IAssociatedDropDownResponseObjects[];
    // 关联物料
    materialRp: IAssociatedDropDownResponseObjects[];
    // 准备耗时
    readyTime: number;
    // 准备时间单位
    readyTimeUnit: string;
    // 生产耗时
    capacityProduceTime: number;
    // 生产时间单位
    capacityTimeType: string;
    // 产出数量
    capacityProduceQuantity: number;
}
// 工费响应对象
export interface I工费响应对象 {
    // id
    id: number;
    // 编号
    code: string;
    // 名称
    name: string;
    // 关联工序
    processRp: IAssociatedDropDownResponseObjects[];
    // 关联物料
    materialRp: IAssociatedDropDownResponseObjects[];
    // 合格产出工费单价（元）
    producePrice: number;
    // 返工产出工费单价（元）
    backProducePrice: number;
    // 准备工费（元）
    readyPrice: number;
}
